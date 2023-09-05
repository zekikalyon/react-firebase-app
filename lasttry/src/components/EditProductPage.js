import React from 'react'
import ProductForm from './ProductForm'
import { useNavigate, useParams } from 'react-router-dom'
import {editProductFromDatabase,removeProductFromDatabase} from '../actions/products'
import {connect} from 'react-redux'
const EditProductPage = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = props.products.find(p=>p.id===id)
    const handleSubmit = (updatedp)=>{
        props.dispatch(editProductFromDatabase(id,updatedp));
        navigate('/Product')
    }
    return (
    <div>
        <ProductForm 
        product = {product}
        onSubmit = {handleSubmit}
        />
        <button className="btn btn-danger"onClick={()=>{
            props.dispatch(removeProductFromDatabase(id))
            navigate('/Product')
        }}>Delete Product</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        products:state.products
        }
    }


export default connect(mapStateToProps)(EditProductPage);