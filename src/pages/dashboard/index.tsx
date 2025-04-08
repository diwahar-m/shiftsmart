import SideBar from "../../components/common/SideBar";
import AppBox from "../../components/mui/AppBox";
import AppHStack from "../../components/mui/AppStack/AppHStack";
import AppText from "../../components/mui/AppText";

export default function DashboardPage (){
  return(
    <AppBox sx={{width: '100%'}} >
      <AppHStack>
        <SideBar/>
        <AppBox sx={{width: '100%'}}>
           <AppText text="HI"/>
        </AppBox>
      </AppHStack>
    </AppBox>
  )
}
