import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./dashboard";
import AppMainLayout from "../components/layout/AppMainLayout";
import StateRoutes from "./state";
import StoreRoutes from "./stores";

export default function Routes() {
  const routes = useRoutes(
    [
    {
      path: "/",
      element: <AppMainLayout />,
      children: [
       DashboardRoutes,
       StateRoutes,
       StoreRoutes
      ],
    },
  ]
  );
  return routes;
}
