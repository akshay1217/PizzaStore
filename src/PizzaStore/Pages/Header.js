import { useState, useEffect, useContext, createContext } from "react";
import {useHistory} from "react-router-dom";
import {Category} from "../fixtures/Category";
import "./header.css"
import "./common.css"
import  {CartContext} from './../../App';


const Header = () => {
    const {totalItemInCart, setTheme} = useContext(CartContext);
    const history = useHistory();  
    const traversePage = () => {
       history.push(`/checkout`); 
   }

    return (
        <>
            <div className="header" onClick={()=>traversePage()}> Total Items : {totalItemInCart} </div>
            <button onClick={()=> setTheme("light")}> Light </button>
            <button onClick={()=> setTheme("dark")}> Dark </button>
        </>
    )
    
}

export default Header;