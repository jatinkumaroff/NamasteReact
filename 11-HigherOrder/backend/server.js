// server.js

const express = require("express");
const cors = require("cors");

const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

// Enable stealth mode
puppeteer.use(StealthPlugin());

const app = express();
app.use(cors());

const PORT = 3000;

// Simple in-memory cache (30 seconds)
const cache = {};
const CACHE_TTL = 30 * 1000;

app.get("/api/menu/:id", async (req, res) => {
  const restaurantId = req.params.id;

  const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.636358667862286&lng=77.28160656988621&restaurantId=${restaurantId}`;

  // ✅ Check cache first
  if (
    cache[restaurantId] &&
    Date.now() - cache[restaurantId].timestamp < CACHE_TTL
  ) {
    console.log("Serving from cache:", restaurantId);
    return res.json(cache[restaurantId].data);
  }

  let browser;

  try {
    // Fast path: try direct server-side fetch first.
    const directResponse = await fetch(apiUrl, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        accept: "application/json, text/plain, */*",
        referer: "https://www.swiggy.com/",
      },
    });

    if (directResponse.ok) {
      const text = await directResponse.text();
      try {
        const parsed = JSON.parse(text);
        cache[restaurantId] = {
          data: parsed,
          timestamp: Date.now(),
        };
        console.log("Successfully fetched (direct):", restaurantId);
        return res.json(parsed);
      } catch {
        console.log("Direct fetch returned non-JSON, trying puppeteer");
      }
    } else {
      console.log("Direct fetch failed:", directResponse.status);
    }

    console.log("Launching stealth browser for:", restaurantId);

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set realistic user agent
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    );

    // Step 1: Open Swiggy homepage to establish cookies/session
    await page.goto("https://www.swiggy.com", {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    // Step 2: Open menu API as the main navigation request.
    // This is more reliable than page.evaluate(fetch(...)) under bot protection.
    const apiResponse = await page.goto(apiUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    if (!apiResponse) {
      return res.status(502).json({
        error: "Failed to get upstream response",
      });
    }

    const responseText = await apiResponse.text();

    let jsonData;

    try {
      jsonData = JSON.parse(responseText);
    } catch (err) {
      console.log("Blocked by WAF or received non-JSON response");
      return res.status(502).json({
        error: "Blocked by upstream protection (WAF)",
        status: apiResponse.status(),
      });
    }

    // Save to cache
    cache[restaurantId] = {
      data: jsonData,
      timestamp: Date.now(),
    };

    console.log("Successfully fetched:", restaurantId);

    res.json(jsonData);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Failed to fetch menu",
      message: error.message,
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Example: http://localhost:${PORT}/api/menu/253984`);
});
