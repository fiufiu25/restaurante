import {Box , Typography,Container, IconButton,Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Orden=({onproduct,total,settotal,setonproduct})=>{
   
    
    const eliminar=(item)=>{
         const actualizado=onproduct.filter(product=>product.id!==item.id)
         settotal(total-item.precio *item.cantidad)

        
         return setonproduct( actualizado)
    }
    return(<>
    <Box sx={{width:300,bgcolor:"rgb(29, 29, 44)",height:"100vh",position:"fixed",right:0,top:0}}>
        <Container>

        <Typography variant="h6" sx={{color:"white",my:2}}>Pedidos #2023434</Typography>
    <Box sx={{my:1}}>

    <ul className="ulbton">
        <li className="libton"><a href="">Cenar en </a>
        </li>
        <li className="libton1"><a href="">Ir</a>
        </li>
        <li className="libton1"><a href="">Delivery </a>
        </li>
    </ul>
    </Box>
  

    <Box sx={{display:"flex" ,justifyContent:"space-between",alignItems:"center",my:2}}>
        <div>
                <Typography  variant="body2" color={"white"}>Item</Typography>
        </div>
        <Box sx={{display:"flex",gap:1, color:"white"}}>
            <Typography variant="body2">Cantidad</Typography>
            <Typography variant="body2">Precio</Typography>
        </Box>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:1,width:"250px",height:"450px"}} className="scroolorde">
            {
                onproduct.length? onproduct.map(item=>(
                    
                    <Box key={item.id} sx={{bgcolor:"rgb(40, 40, 54)",p:1,borderRadius:3,color:"white"}}>
                <Box >
                    
              
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between" }}>

             
            <Box sx={{display:"flex"}}>
            <img src={item.img} width={30} alt="" />
            <Box>

            <Typography sx={{fontSize:12 , color:"white"}} variant="body2">{item.title}</Typography>
            <Typography sx={{fontSize:13 ,  color:"grey"}} variant="body2">${item.precio}</Typography>
            </Box>
            
            </Box>
            
              <p> {item.cantidad} </p>
              <h6 >${item.precio}</h6>
              </Box>
                
             
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                     <Typography variant="body2" sx={{width:190,padding:1,bgcolor:"rgb(29, 29, 44)",color:"white",borderRadius:1}}>nota orden...</Typography>
          
            <IconButton color="error" aria-label="add an alarm" onClick={()=>eliminar(item)}>
            <DeleteIcon/>
</IconButton>

            </Box>
            </Box>
            
                )
                )
                :( 
                   <Box>
                    <Typography variant="h5" sx={{textAlign:"center" ,color:"whitesmoke",}}>No hay pedidos</Typography>
                   </Box>)
            }
           
        </Box>
  <Box sx={{p:1,mt:2,bgcolor:"rgb(40, 40, 54)",borderRadius:3}}>
    <Box sx={{display:"flex",justifyContent:"space-between",justifyItems:"center"}}>
        <Typography variant="body2" sx={{color:"whitesmoke"}}>Descuento</Typography>
        <Typography variant="body2" sx={{color:"whitesmoke"}}>0.0</Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"space-between",justifyItems:"center"}}  >
        <Typography variant="body2" sx={{color:"whitesmoke"}}>Total</Typography>
        <Typography variant="body2" sx={{color:"whitesmoke"}}>{total}</Typography>
    </Box>
    <Button variant="contained" color="success"  size="small" sx={{borderRadius:1,mt:2,width:"100%",p:1}}>continuar con la compra</Button>
  </Box>

      
        </Container>
    
    </Box>
    </>)
    
}
export default Orden