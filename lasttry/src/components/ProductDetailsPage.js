import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {addtoCart,edittoCart} from '../actions/orders'
import {editProductFromDatabase } from '../actions/products';


const ProductDetailsPage = (props) => {
    
    
    const {id} = useParams();
    const navigate =useNavigate();
    const product = props.products.find(p=>p.id===id)
    
    
    const [quantity,setQuantity] = useState(0);

    const decrement = () =>{
        if(quantity>0){
            setQuantity(quantity-1)
        }
        
    }
    const increment = () =>{
        if(quantity<product.stock){
            setQuantity(quantity+1)
        }       
    }
    const QuantityChange = (e) =>{
        console.log(props.quantity)
        setQuantity(e.target.value)
        
    }
    
    const HandleOrderControl =()=>{
        
            product.stock-=quantity
            props.dispatch(editProductFromDatabase(id,product))
            //BURAYA KADAR SIKINTI YOK
            

            
            const isItemCart = props.orderproducts.find(item => item.id===product.id)
            if(isItemCart){
                    props.orderproducts.map(item=>{
                    if(item.id === product.id){
                        let tempQty = item.quantity + quantity;
                        let tempTotalPrice = tempQty*item.price                       
                        const tempproduct = {
                            ...product,
                            quantity:tempQty,
                            totalPrice:tempTotalPrice
                        }
                        props.dispatch(edittoCart(tempproduct.id,tempproduct))
                        navigate('/Cart')
                    }
                })
            }
            else{
                const temp3product = {
                    ...product,
                    quantity:quantity,
                    totalPrice:product.price*quantity
                }
                props.dispatch(addtoCart(temp3product))
                navigate('/Cart')
            }
        
        // else{
        //     const temp4product = {
        //         ...product,
        //         quantity:quantity,
        //         totalPrice:product.price*quantity
        //     }
        //     props.dispatch(addtoCart(temp4product))
        //     navigate('/Cart')
        // }
    }
    
    return (
    <div>
        <div>
            <div  className="container pd-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid rounded" alt=''/>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{product.productisim}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-3">                    
                            <span className="product-number">{product.id}</span>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12 pb-3">
                            <div >
                                 {product.description}
                            </div>
                        </div>
        
                    </div>
                    <div className="row mt-1">
                        <div className="cold-md-4 pl-3 pb-3">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            <span className="badge badge-success">{product.stock}</span>
                        </div>
                        <div  className="col-md-4">
                            <Link to="/Contact">Yorum Yap </Link>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12 ">
                            <button onClick={decrement} className='text-5xl cursor-pointer'>-</button>
                            <input className='font-bold' type='text' onChange={QuantityChange} value={quantity}/>
                            <button onClick={increment} className='text-5xl cursor-pointer'>+</button>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12 ">
                            <h4 id="product-price">{product.price} TL</h4>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12 ">
                                
                                <button  className="btn btn-success" onClick={HandleOrderControl}>
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                          Sepete Ekle
                                </button >
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">            
                    <div className="bd-example bd-example-tabs">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-description-tab" data-toggle="pill" data-target="#pills-description" type="button" role="tab" aria-controls="pills-description" aria-selected="true">Açıklama</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-payment-tab" data-toggle="pill" data-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false">Ödeme Seçenekleri</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-comment-tab" data-toggle="pill" data-target="#pills-comment" type="button" role="tab" aria-controls="pills-comment" aria-selected="false">Yorumlar</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                <p>{product.description}</p>
                            </div>
                            <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab">
                                <p>Placeholder content for the tab panel. This one relates to the profile tab. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                            </div>
                            <div className="tab-pane fade" id="pills-comment" role="tabpanel" aria-labelledby="pills-comment-tab">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        orderproducts:state.orderproducts
    }
}

export default connect(mapStateToProps)(ProductDetailsPage)


