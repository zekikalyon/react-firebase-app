import React from 'react'

import ProductListItem from './ProductListItem';
import {connect} from 'react-redux';

const HomePage = ({products}) => {
 
  const homeproducts = products.filter(p => p.price<100000)  
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {homeproducts.map(product=>(
            <ProductListItem key={product.id} {...product}/>
          )
              
          )}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}

export default connect(mapStateToProps)(HomePage)