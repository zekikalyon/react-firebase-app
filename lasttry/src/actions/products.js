import logo from '../logo192.png';
import database from '../firebase/FirebaseConfig'




export const addProduct = (product) =>({
    type:"addProduct",
    product
  })


  export const addProductToDatabase= (productData={}) =>{
  return (dispatch) => {
    const {productisim='',description='',dateAdded=0,price=0,image=logo,stock=0} = productData;
    const product = {productisim,description,dateAdded,price,image,stock};
    database.ref("products").push(product).then((res)=>{
      dispatch(addProduct({
        id:res.key,
        ...product
      }))
    })

  }
}

 export const removeProduct = (id) =>(
    {
      type:"removeProduct",
      id:id
    }
  )

  export const removeProductFromDatabase = (id) =>{
    return(dispatch)=>{
      return database.ref(`products/${id}`).remove().then(()=>{
        dispatch(removeProduct(id));
      })
    }
  }
 export const editProduct = (id,updates) =>({
    type:"editProduct",
    id,
    updates
  
  })

  export const editProductFromDatabase = (id,updates) =>{
    return(dispatch)=>{
      return database.ref(`products/${id}`).update(updates).then(()=>{
        dispatch(editProduct(id,updates))
      })
    }
  }
  

  export const setProducts = (products) =>({
    type:"setProducts",
    products
  })
  export const getProductsFromDatabase = () =>{
    return (dispatch) =>{
      return database.ref("products").once("value").then((snapshot) =>{
        const products = [];
        snapshot.forEach((product)=>{
          products.push({
            id:product.key,
            ...product.val()
          })
          dispatch(setProducts(products));
        })
      })
    }
  }