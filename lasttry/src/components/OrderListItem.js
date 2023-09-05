import React from 'react'
import { removeFromCart } from '../actions/orders'
import { connect, useDispatch } from 'react-redux'
import { editProductFromDatabase } from '../actions/products';


const OrderListItem = ({ id, productisim,totalPrice,quantity,products}) => {
  const dispatch = useDispatch();
  console.log(products)
  
  const OnClickBasket = () =>{
          const product =products.find(p=>p.id===id)
          console.log(product)
          product.stock += quantity;        
          dispatch(removeFromCart(id));
          dispatch(editProductFromDatabase(id,product))
  }
  
  return (
    <div>
        <li>
             {productisim} - {quantity}Adet-{totalPrice} TL 
             <button 
             className='btn btn-danger'
             onClick={OnClickBasket}
             >
              Sepetten Çıkar
              </button>
        </li>
    </div>
  )
}
const mapStateToProps = (state) =>{
  return {
      products:state.products
      }
  }
export default connect(mapStateToProps)(OrderListItem)