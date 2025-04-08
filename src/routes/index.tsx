import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./dashboard";
import AppMainLayout from "../components/layout/AppMainLayout";

export default function Routes() {
  const routes = useRoutes(
    [
    {
      path: "/",
      element: <AppMainLayout />,
      children: [
       DashboardRoutes
      ],
    },
  ]
  );
  return routes;
}
