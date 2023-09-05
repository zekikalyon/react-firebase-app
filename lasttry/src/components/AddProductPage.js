import React from 'react'
import ProductForm from './ProductForm'
import { connect } from 'react-redux'
import{addProductToDatabase} from '../actions/products'
import {useNavigate} from 'react-router-dom'


const AddProductPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='container'>
        <h1>
            AddProductPage
        </h1>
        </div>
        <ProductForm onSubmit={(product)=>{
            props.dispatch(addProductToDatabase(product));
            navigate('/Product')
        }}/>
    </div>
  )
}

export default connect()(AddProductPage)
