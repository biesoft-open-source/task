import { createBrowserRouter, Navigate } from "react-router-dom";
import { routes } from "../constants";
import { Dashboard, dashboardLoader, Details, detailsLoader } from "../modules";
import { queryClient } from "./queryClient";

export const router = createBrowserRouter([
  {
    path: routes.dashboard,
    element: <Dashboard />,
    loader: dashboardLoader(queryClient),
  },
  {
    path: routes.details(),
    element: <Details />,
    loader: detailsLoader(queryClient),
  },
  {
    path: "*",
    element: <Navigate to={routes.dashboard} />,
  },
]);
