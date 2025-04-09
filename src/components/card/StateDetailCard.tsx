import AppVStack from '../mui/AppStack/AppVStack'
import AppHStack from '../mui/AppStack/AppHStack'
import AppText from '../mui/AppText'
import { LinearProgress } from '@mui/material'
import TagCard from './TagCard'
import AuditTrendText from './AuditTrendText'
import AppButton from '../mui/AppButton'
import { useNavigate } from 'react-router-dom'


const tags = [
  'On Shelf', 'In inventory', 'Out of stock'
]

interface StateDetailCardProps {
  stateName: string
}



export default function StateDetailCard({stateName}: StateDetailCardProps) {

  const navigate = useNavigate();


  return (
    <AppVStack sx={{backgroundColor: "#fff",border: '1px solid #CBD5E1', borderRadius: '16px', width: '362px', height: '514px', padding: '24px', gap: '32px', boxSizing:'border-box'}}>
      <AppHStack sx={{width: '100%', justifyContent: 'space-between'}}>
        <AppText variant={'h4'} text={stateName}  sx={{fontWeight: 600, fontSize:'24px', lineHeight: '28px'}}/>
        {/* <X color={'#475569'} /> */}
      </AppHStack>
      <AppVStack sx={{gap:'4px'}}>
        <AppText variant={'h4'} text={'Completed audits'} sx={{color:'#475569', fontSize:'16px'}}/>
        <AppText sx={{color:'#0F172A', fontSize:'36px', fontWeight:600, lineHeight:'45px',height:'40px' }} variant="h1" text={'85%'}/>
        <LinearProgress sx={{width:'226px', height:'16px'}} variant="determinate"  />
      </AppVStack>
      <AppVStack>
        <AppText variant={'subtitle1'}  text={'Inventory'}/>
        <LinearProgress sx={{width:'226px', height:'16px'}} variant="determinate"  />
      </AppVStack>
      <AppVStack sx={{marginTop:'6px', gap: '18px'}}>
         {
           tags?.map((_)=> 
            <AppHStack key={_} sx={{ width:'323px', justifyContent:'space-between'}}>
              <TagCard/>
              <AppHStack  sx={{justifyContent:'space-between'}}>
                <AppText variant='subtitle2' sx={{fontSize:'24px', lineHeight: '28px', fontWeight: 600}} text={'20%'}/>
                <AuditTrendText/>
              </AppHStack>
            </AppHStack>
          )
         }
      </AppVStack>

      <AppButton handleClick={()=> navigate(`/${stateName}/stores`)}  sx={{marginTop:'18px', fontSize:'16px', fontWeight:500, backgroundColor: '#0B57C0', height: '36px', borderRadius: '8px', color:'#fff'}}>
         View Stores
      </AppButton>

    </AppVStack>
  )
}
