

const orderState = [];


 const OrdersReducer = (state=orderState,action)=>{
    
    switch(action.type){
        case "addtoCart":
            return[
                ...state,
                action.product    
            ]
        case "edittoCart":
            return state.map((product)=>{
                if(product.id === action.id){
                    return{
                      ...product,
                      ...action.updates
                    }
                }
                else{
                    return product;
                }
            })
         case "removeFromCart":
           
            return state.filter(({id})=>{
                return  id !== action.id;
              })
                
               
            
    default:
        return state;
    }
}
export default OrdersReducer;






















    //const fetchFromLocalStorage = () =>{
        //     let cart = localStorage.getItem('cart');
        //     if(cart){
        //         return JSON.parse(localStorage.getItem('cart'))
        //     }
        //     else{
        //         return[]
        //     }
        // }
        // const storeInlocalStorage = (data)=>{
        //     localStorage.setItem('cart',JSON.stringify(data))
        // }
        
        // const initialState = {
        //     carts : fetchFromLocalStorage(),
        //     ItemCount : 0,
        //     totalAmount : 0
        // }
        
        // const OrdersReducer = (state=orderState,action) =>{
        //     switch(action.type){
        //         case "addtoCart":
        //             const itscart = state.carts.find(item => item.id === action.id)
        //             if(itscart){
        //                 const tempcart = state.carts.map(item=>{
        //                     if(item.id === action.id){
        //                         let tempQty = item.quantity + action.quantity;
        //                         let tempTotalPrice = tempQty + item.price;
        
        //                     }
        //                 })
        //             }
        //             return[
        //                 ...state,
        //                 action.product            
        //             ]
        //     }
        // }