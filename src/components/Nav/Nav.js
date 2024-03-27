import React,{useEffect, useState} from "react";
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink,useLocation } from "react-router-dom";
import {Link} from 'react-scroll';
import Cookies from 'universal-cookie';
import axios from "axios";
const Nav =()=>{
  const location = useLocation();
  const cookie=new Cookies
  const token=cookie.get("Bearer")
  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  async function handleLogOut(){
    await axios.post("http://127.0.0.1:8000/api/logout",null,{
        headers:{
        Authorization:"Bearer "+ token,},
    });
    cookie.remove("Bearer ")
    window.location.pathname="/"
}
    return (
      <header>
        <nav className="navbar">
        <NavLink className="navlink" to="/react-ecommerce" >HOME</NavLink>
        <NavLink className="navlink" to="/react-ecommerce/Products">PRODUCTS</NavLink>
        <Link className="navlink" to="contactus" smooth={true} >CONTACT US</Link>
          
           {token?
            <NavLink to="react-ecommerce">
            <FontAwesomeIcon onClick={handleLogOut} className="icon" icon="fa-solid fa-arrow-right-from-bracket" />
            </NavLink>
           :
          <NavLink to="/user">
           <FontAwesomeIcon className="icon" icon="user" />
            </NavLink>
          }
        </nav>
      </header>
    );
  
}

export default Nav;
