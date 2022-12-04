import { useState, useEffect, useContext, createContext } from "react";
import {useHistory} from "react-router-dom";
import {Category} from "../fixtures/Category";
import "./header.css"
import  {CartContext} from './../../App';


const Header = () => {
    const {totalItemInCart} = useContext(CartContext);
    const history = useHistory();  
    const traversePage = () => {
       history.push(`/checkout`); 
   }

    return (
        <>
            <div className="header" onClick={()=>traversePage()}> Total Items : {totalItemInCart}</div>

        </>
    )
    
}

export default Header;