import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Typography,Button} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navegacion=()=>{
    return<>
     <Box sx={{ width: "100px", bgcolor: 'rgb(29, 29, 44)',height:"100vh",position:"fixed",left:0,top:0 }}>
      <nav >
       <Typography variant="h6" sx={{fontWeight:900,color:"white",py:2,px:1,textAlign:"center"}}>Bonnie</Typography>
        <ul>
            <li  className='lins'><a href="#" className='linka'> <HomeOutlinedIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            <li  className='lins1'><a href="#" className='linka'> <PercentIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            <li  className='lins1'><a href="#" className='linka'> <AccessTimeIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            <li  className='lins1'><a href="#" className='linka'> <EmailOutlinedIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            <li  className='lins1'><a href="#" className='linka'> <NotificationsNoneIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            <li  className='lins1'><a href="#" className='linka'> <SettingsOutlinedIcon sx={{fontSize:"30px"}} className='iconlink'/></a> </li>
            

        </ul>
        
      </nav>
      
    </Box>


    </>
}
export default Navegacion