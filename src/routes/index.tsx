import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./dashboard";

export default function Routes() {
  const routes = useRoutes([DashboardRoutes]);
  return routes;
}
