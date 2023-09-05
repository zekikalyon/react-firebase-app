import React from 'react'
import { Link } from 'react-router-dom'

const ProductListItem = ({ id, productisim, image, description, price }) => {
  return (
    <>
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <img src={image} className='card-img-top' alt={productisim} />
        <div className='card-body'>
          <h5 className='card-title'>
            <Link to={`/Product/${id}`}>{productisim}</Link>
          </h5>
          <p className='card-text pt-2 description'>{
          description.length>30 ? description.substring(0,30)+'...':description
          }</p>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <small className='text-muted product-price'>
            <i className='fa fa-try' aria-hidden='true' />
            {price}TL
          </small>
          <Link to={`/Product/${id}`}>Details</Link>
          <Link to={`/edit/${id}`}>Edit</Link>
          
        </div>
      </div>
    </div>
    </>
  );
};
//li ekle olmazsa.
export default ProductListItem


