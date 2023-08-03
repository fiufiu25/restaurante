import {Box ,Typography} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Taps from "./Taps";
import { useState } from "react";
const Filtro=({comidas,onproduct,setonproduct,total,settotal,setcomidas})=>{

const[filtro,setfiltro]=useState("")
const filtrar=(valor)=>{
    setfiltro(valor.target.value)
}
 
   const filteredItems = comidas.filter((item) => item.title.toLowerCase().includes(filtro.toLowerCase()) )

  
    return<>
    <Box sx={{p:2,px:4 ,width: {xs:"100%" , md:" calc(100% - 400px)"},ml:{sx: 0,md:"100px"}}}>

    
    <Box sx={{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between",flexWrap:{xs:"wrap",md:"nowrap"}}}>
    <div>
        <Typography variant="h6" sx={{color:"white",fontWeight:800}}> Gatito Plato</Typography>
        <Typography variant="body2" sx={{color:"grey"}}>22 mayo 2023</Typography>
    </div>
    <div className="buscar">
       <SearchOutlinedIcon sx={{color:"white",fontSize:15}}/>
        <input  type="search" placeholder="Buscar" onChange={filtrar} />
    </div>
    </Box>
    <Taps filteredItems={filteredItems} comidas={comidas} onproduct={onproduct} total={total} settotal={settotal} setonproduct={setonproduct}/>
    </Box>
    </>
}
export default Filtro