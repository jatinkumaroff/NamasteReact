import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!resId) return;

    const controller = new AbortController();

    const extractItemCards = (json) => {
      const regularCards =
        json?.data?.cards
          ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const itemCards = regularCards
        .map((c) => c?.card?.card?.itemCards)
        .find((arr) => Array.isArray(arr));

      return itemCards || [];
    };

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const apiBase =
          process.env.REACT_APP_MENU_API_BASE || "http://localhost:3000/api/menu";
        const response = await fetch(`${apiBase}/${resId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          let reason = `HTTP error: ${response.status}`;
          try {
            const errJson = await response.json();
            if (errJson?.error) {
              reason = `${reason} - ${errJson.error}`;
            }
          } catch {
            // Ignore JSON parse errors for non-JSON upstream responses.
          }
          throw new Error(reason);
        }

        const json = await response.json();
        const cards = extractItemCards(json);
        setMenuData(cards);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setMenuData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [resId]);

  return { menuData, error, isLoading };
};

export default useRestaurantMenu;
 
