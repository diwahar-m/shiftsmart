import { Outlet } from "react-router-dom";
import AppHStack from "../mui/AppStack/AppHStack";
import SideBar from "../common/SideBar";
import HeaderBar from "../common/HeaderBar";
import AppVStack from "../mui/AppStack/AppVStack";


export default function AppMainLayout() {
  return (
    <AppHStack sx={{alignItems: 'flex-start', minHeight: "100vh",
          maxWidth: '100vw' }}
    >
      <SideBar/>  
      <AppVStack sx={{flex: 1, width: '100%', maxWidth: '100%'}}>
          <HeaderBar />
          <Outlet/>
      </AppVStack>
    </AppHStack>  
  )
}
