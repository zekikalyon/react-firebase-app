import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import ProductPage from '../components/ProductPage'
import ProductDetailsPage from '../components/ProductDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import AddProductPage from '../components/AddProductPage'
import EditProductPage from '../components/EditProductPage'
import Login from '../components/Login'
import Order from '../components/Order'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path="/Product" element={<ProductPage/>}/>
                <Route path='/Product/:id' element={<ProductDetailsPage/>}/>
                <Route path='/Create' element={<AddProductPage/>}/>
                <Route path='/Cart' element = {<Order/>}/>
                <Route path='/edit/:id' element={<EditProductPage/>}/>               
                <Route path='/contact' element={<ContactPage/>}/>
                <Route  element={<NotFoundPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter