import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./PizzaStore/Pages/Home";
import Product from "./PizzaStore/Pages/Product";
import Checkout from "./PizzaStore/Pages/Checkout";
import Header from "./PizzaStore/Pages/Header";

function App() {
  return (
    <Router>
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
    </Router>
  );
}
 
export default App;
