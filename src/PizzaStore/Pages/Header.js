import { useState, useEffect, useContext, createContext } from "react";
import {useHistory} from "react-router-dom";
import {Category} from "../fixtures/Category";
import "./header.css"
import  {CartContext} from './../../App';


const Header = () => {
    const {totalItemInCart} = useContext(CartContext)

    return (
        <>
            <div className="header"> Total Item : {totalItemInCart}</div>

        </>
    )
    
}

export default Header;