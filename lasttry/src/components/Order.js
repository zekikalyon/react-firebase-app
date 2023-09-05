import React, { useEffect,useState } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import OrderListItem from './OrderListItem'
import { addCartToDatabase } from '../actions/orders';
import { useNavigate } from 'react-router-dom';
import {firebase} from '../firebase/FirebaseConfig'





export const Order = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      // Sepet değiştikçe toplam fiyatı yeniden hesapla
      const calculateTotalPrice = () => {
          return props.orderproducts.reduce((total, product) => total + product.totalPrice, 0);
      };

      const calculatedTotalPrice = calculateTotalPrice();
      setTotalPrice(calculatedTotalPrice);
  }, [props.orderproducts]);
    
    console.log(props)
    const SubmitOrder = ()=>{
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          
          const Carddata = {
            ...props.orderproducts,
            uid:user.uid,
            orderdate:Date.now(),
            GetTotalPrice:totalPrice
            
          }
          dispatch(addCartToDatabase(Carddata))
        }
         else{
          navigate('/Login')
        }
        })

    }
    // console.log(props.orderproducts)
    // dispatch(addCartToDatabase(props.orderproducts))
    return (      
      <>
      <div className='container'>
        <div className='alert alert-success' role='alert'>
          <i className='fa fa-check-square' aria-hidden='true'></i>
          <div className='container'>
            <strong> {props.orderproducts.length} adet </strong>ürün listelendi
          </div>
        </div>
        <ul>
          {props.orderproducts.map((product) => (
            <OrderListItem key={product.id} {...product} />
          ))}
        </ul>
      </div>
      <div className='container'>
        <strong>
            Toplam Fiyat: {totalPrice} TL
        </strong>
      </div>
      <div className='row'>
        <div className='container'>
        <button className='btn btn-success' onClick={SubmitOrder}>
            Sepeti Onayla
        </button>
        </div>
      </div>
      </>
    )
  
}

const mapStateToProps = (state) => {
    return {
        orderproducts: state.orderproducts,
        products:state.products
        
    }
  }

export default connect(mapStateToProps)(Order)
