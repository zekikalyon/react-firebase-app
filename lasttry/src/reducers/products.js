const productState= []

const ProductsReducer = (state=productState,action) =>{
  switch(action.type){
    case "addProduct":
      return[
        ...state,
        action.product
      ]
    case "removeProduct":
      return state.filter(({id})=>{
        return  id !== action.id;
      })
    case "editProduct":
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
      case "setProducts":
        return action.products
    
    default:
      return state;
  }
}


export default ProductsReducer