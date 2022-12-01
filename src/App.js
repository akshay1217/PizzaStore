import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./PizzaStore/Pages/Home";
import Product from "./PizzaStore/Pages/Product";
import Checkout from "./PizzaStore/Pages/Checkout";
import Header from "./PizzaStore/Pages/Header";
import { createContext, useState } from "react";

export const CartContext = createContext();

function App() {
  const [totalItemInCart, setTotalItemInCart] = useState(0);


  return (
    <Router>
      <CartContext.Provider value={{
        totalItemInCart,
        setTotalItemInCart
      }}>
      <Header />
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/product/:categoryId" exact>
          <Product />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </CartContext.Provider>
    </Router>
  );
}
 
export default App;
