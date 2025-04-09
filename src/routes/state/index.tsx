import AppLoadSuspense from "../../components/mui/AppLoadSuspense/index.js";
import { lazy } from "react";

const State_Page = "/state/:stateId";

const StatePage = AppLoadSuspense(lazy(() => import('../../pages/state/index.js')))

const StateRoutes = {
      path: State_Page,
      element: <StatePage />,
};

export default StateRoutes
