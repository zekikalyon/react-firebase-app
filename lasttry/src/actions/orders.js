
import  database  from "../firebase/FirebaseConfig";

export const addtoCart = (product) =>({
    type:"addtoCart",
    product
})
export const edittoCart = (id,updates) =>({
    type:"edittoCart",
    id,
    updates
})

export const addCartToDatabase = (CartData=[])=>{
    return() =>{
        database.ref("orders").push(CartData)
            
        
    }
    
    
}

 export const removeFromCart = (id) =>(
     {
       type:"removeFromCart",
       id:id
     }
   )