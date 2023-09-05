import React from 'react'
import {connect} from 'react-redux';
import ProductListItem from './ProductListItem';


const ProductList = (props) => {
    return (
      
      <div className='container'>
        <div className='alert alert-success' role='alert'>
          <i className='fa fa-check-square' aria-hidden='true'></i>
          <div className='container'>
            <strong> {props.products.length} adet </strong>ürün listelendi
          </div>
        </div>
  
        <div className='row'>
          {props.products.map((product) => (
            <ProductListItem key={product.id} {...product} />
          ))}
        </div>
      </div>
      
    )
  }

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList)