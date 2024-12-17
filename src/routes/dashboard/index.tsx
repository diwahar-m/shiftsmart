import AppLoadSuspense from "../../components/custom/AppLoadSuspense.js";
import { Dashboard_Page } from "./url.js";
import { lazy } from "react";

const DashboardPage = AppLoadSuspense(lazy(() => import('../../pages/dashboard/index.js')))


const DashboardRoutes = {
      path: Dashboard_Page,
      element: <DashboardPage />,
   
};

export default DashboardRoutes
