
import {Box , Typography} from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Cards from "./Cards";
const Taps=({comidas,onproduct,setonproduct,total,settotal,filteredItems})=>{
    return(
        <>
        <Box sx={{mt:3}}>
        <div>
            <ul className="list_comida">
                <li><a href="">Entrada</a></li>
                <li><a href="">Comida A La Carta</a></li>
                <li><a href="">Comida Rapida</a></li>
                <li><a href="">Bebidas</a></li>
            </ul>
        </div>
       
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt:2}}>
            <div>
            <Typography variant="body1" sx={{color:"white",fontWeight:500}}> Elije Plato</Typography>
            </div>
        <div className="cenardiv">
<ArrowDropDownOutlinedIcon/>
         <Typography variant="body2">Cenar en</Typography>
        </div>
        </Box>
        </Box>
       
<Cards filteredItems={filteredItems} comidas={comidas} onproduct={onproduct} setonproduct={setonproduct} total={total} settotal={settotal}/>
        </>
    )
}
export default Taps