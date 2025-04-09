import AppHStack from '../mui/AppStack/AppHStack'
import { ArrowUp } from 'lucide-react'
import AppText from '../mui/AppText'

export default function AuditTrendText() {
  return (
     <AppHStack>
        <ArrowUp color='#B91C1C' />
        <AppText text={'3pp'} sx={{color:'#B91C1C',fontSize:'12px', lineHeight: '16px'}}/>
        <AppText text={'vs. last audit'} sx={{color:'#475569', marginLeft:'4px',fontSize:'12px', lineHeight: '16px'}}/>
    </AppHStack>
  )
}
