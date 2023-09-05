import React, { Component } from 'react'
import logo from '../logo192.png';

export default class ProductForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            productisim:props.product? props.product.productisim:'',
            description:props.product? props.product.description:'',
            price:props.product? props.product.price:0,
            image:logo,
            stock:props.product? props.product.stock:0,
            error:''
        }
    }
   
    onProductNameChange=(e)=>{
        const productisim= e.target.value;
        this.setState(()=>({productisim}))
    }
    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    onPriceChange = (e) =>{
        const price = e.target.value;
        this.setState(()=>({price}))
    }
    onStockChange = (e) =>{
        const stock = e.target.value;
        this.setState(()=>({stock}))
    }
    onSubmit = (e)=>{
        e.preventDefault();

        if(!this.state.productisim || !this.state.description || !this.state.price){
            this.setState({error:'Lütfen tüm alanları doldurunuz'})
            
        }
        else{
            this.setState({error:''})
            this.props.onSubmit({
                productisim:this.state.productisim,
                description:this.state.description,
                price:this.state.price,
                dateAdded:Date.now(),
                image:logo,
                stock:this.state.stock
            })
        }

    }
    render() {
    return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            
            
            <form onSubmit={this.onSubmit}>
                
                <div >
                    <div>
                    <input placeholder='ürün adı' 
                    value={this.state.productisim}
                    onChange={this.onProductNameChange}/>
                    </div>
                </div>
                <div>
                    <textarea placeholder='enter description'
                    value={this.state.description}
                    onChange={this.onDescriptionChange} >
                    </textarea>
                </div>
                <div>
                    <textarea placeholder='enter price'
                    value={this.state.price}
                    onChange={this.onPriceChange} >                        
                    </textarea>
                </div>
                <div>
                    <textarea placeholder='enter stock'
                    value={this.state.stock}
                    onChange={this.onStockChange} >                        
                    </textarea>
                </div>
                <button type="submit" className='btn btn-primary '>Save Changes</button>
                
            </form>
          
            
        </div>
    )
  }
}
