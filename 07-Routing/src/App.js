import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
//   Link,
// } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestrauntMenu from "./components/RestaurantMenu";
//First component- top level:   js function returning peice of jsx code
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Outlet /> returns the children component acording to path */}
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />, //if path is this, load this
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Body /> },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestrauntMenu />,
//       },
//     ],
//   },
//   {
//     path: "/about",
//     element: <About />, //if path is this, load this
//   },
//   {
//     path: "/contact",
//     element: <Contact />, //if path is this, load this
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
root.render(<AppLayout />);
