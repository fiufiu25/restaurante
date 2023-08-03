
import Filtro from "./componet/Filtro"
import Navegacion from "./componet/Navegacion"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Box , Typography, Fab,Drawer} from "@mui/material";
import { useState } from "react";
import Orden from "./componet/Orden";
import Panel from "./componet/Panel";


const comida=[
  {id:1,cantidad:1,title:"Hamburguesa  vegetariana",precio:4.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:2,cantidad:1,title:"Hamburguesa  callejera",precio:5.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:3,cantidad:1,title:"Hamburguesa  de conejo",precio:6.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:4,cantidad:1,title:"Hamburguesa  de pollo",precio:8.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:5,cantidad:1,title:"Hamburguesa  de huevo",precio:6.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:6,cantidad:1,title:"Hamburguesa  de arina",precio:4.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:7,cantidad:1,title:"Hamburguesa  de manzana",precio:3.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:8,cantidad:1,title:"Hamburguesa  vegetariana",precio:5.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"},
  {id:9,cantidad:1,title:"Hamburguesa  vegetariana",precio:7.00,img:"https://www.buscopng.com/wp-content/uploads/2020/09/Plato-con-hamburguesa-y-papas.png"}
]
const App=()=>{
  
 const [onproduct,setonproduct]=useState([])
  const [comidas, setcomidas]=useState(comida)
  const [total,settotal]=useState(0)
 
  const[colorbody,setcolorbody]=useState("rgb(40, 40, 54)")
return(
  <>
  <div style={{ backgroundColor: colorbody }} className="principal">

<Box sx={{display:{xs:"none",md:"block"}}}>
<Navegacion/>
</Box>

  <Box width={"100%"} height={"100%"}>
  <Filtro comidas={comidas} setcomidas={setcomidas} onproduct={onproduct} setonproduct={setonproduct} total={total} settotal={settotal}/>
  </Box>
<Box  sx={{display:{xs:"none",md:"block"}}}>
<Orden comidas={comidas} onproduct={onproduct} setonproduct={setonproduct} total={total} settotal={settotal}/>
</Box>
</div>

<Box  sx={{display:{xs:"block",md:"none",position:"fixed",bottom:0,left:0}}}>
  <Panel onproduct={onproduct} setonproduct={setonproduct} total={total} settotal={settotal}/>
</Box >



  </>

)

 
}
export default App