import { Outlet } from "react-router-dom";
import AppBox from "../mui/AppBox";


export default function AppMainLayout() {
  return (
    <AppBox sx={{
          minHeight: "100vh",
          minWidth: "100vw"
        }}>
        <Outlet/>
    </AppBox>
  )
}
