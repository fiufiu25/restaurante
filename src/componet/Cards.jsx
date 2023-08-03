import {Box , Typography} from "@mui/material";





const Cards=({comidas,onproduct,setonproduct,total,settotal,filteredItems})=>{
    
 const  onaddproduct=(product)=>{
console.log(filteredItems)
    if(onproduct.find(item=>item.id===product.id)){
        const products= onproduct.map(item=>item.id===product.id?{...item,cantidad: item.cantidad + 1}:item)
        settotal(total+product.precio *product.cantidad)
     
        return setonproduct([...products])
    }
    settotal(total+product.precio *product.cantidad)

 setonproduct([...onproduct, product])
 
 }


    return(
        <>
        <Box sx={{color:"white",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",width:"100%"}}>
{
 comidas.map(product=>(
        <Box key={product.id}  className={`${ !filteredItems.includes(product)?"hide":"" }`} onClick={()=>onaddproduct(product)} sx={{textAlign:"center",width:280,height:200,bgcolor:" rgb(29, 29, 44)",padding:1,borderRadius:2,m:1,cursor:"pointer"}}>
        <img width={150} className="platos" src={product.img} alt="" />
       <Typography variant="h6">
       {product.title}
       </Typography>
       <Typography variant="body1">
        ${product.precio}
       </Typography>
       <Typography variant="body2" sx={{color:"grey"}}>
           Solo quedan 20
       </Typography>
       
        </Box>
    ))
}
        </Box>
       
      
        
        </>
    )
}
export default Cards