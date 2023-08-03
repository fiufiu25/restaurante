import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuIcon from '@mui/icons-material/Menu';
import {Box , IconButton,Drawer} from "@mui/material";
import Navegacion from './Navegacion';
import { useState } from 'react';
import Orden from './Orden';
const Panel=({onproduct,total,settotal,setonproduct})=>{
    const [open,setopen]=useState(false)
    const [openorden,setopenorden]=useState(false)
    return (
        <>
        <Box sx={{
            bgcolor:"rgb(29, 29, 44)",
            borderRadius:4,
            display:"flex",
            justifyContent:"space-around",
            alignContent:"center",
          width:"100vw",
          overflow:"hidden",
          p:1
        }
        }>
       <IconButton> <AccountCircleOutlinedIcon sx={{color:"white"}}/></IconButton>
       <IconButton> <AddIcon sx={{color:"white"}}/></IconButton>
       <IconButton  onClick={()=>setopenorden(!openorden)}> <AccessTimeIcon sx={{color:"white"}}/></IconButton>
       <IconButton onClick={()=>setopen(!open)}> <MenuIcon sx={{color:"white"}}/></IconButton>
        </Box>
        <Drawer open={open}  onClose={()=>{setopen(false)}} anchor="left">
            <Navegacion/>
        </Drawer>
        <Drawer open={openorden}  onClose={()=>{setopenorden(false)}} anchor="right">
            <Orden onproduct={onproduct} setonproduct={setonproduct} total={total} settotal={settotal}/>
        </Drawer>

        </>
    )
}
export default Panel