import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
  return (
    <div className='container mb-3'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
            <NavLink to="/" className="active" >Anasayfa</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/Product" className="active">Ürünler</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/Create" className="active">Ürün Ekle</NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink to="/Contact" className="active">İletişim</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/Login" className="active">Login</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/Cart" className="active">Sepetim</NavLink>
            </li>
            <button onClick={logout}>Logout</button>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Header