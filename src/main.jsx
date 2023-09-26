import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Donation from "./components/Donation/Donation";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import DonationDetails from "./components/Donation/DonationDetails";
import NotFound from "./components/NotFound/NotFound";

// All Routes are defined here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        exact: true,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "donation/:donationId",
        element: <DonationDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
