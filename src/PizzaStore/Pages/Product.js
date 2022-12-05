import { useParams } from "react-router-dom";
import { CategoryItems } from "../fixtures/Category-item";
import { Items } from "../fixtures/Items";
import "./product.css";
import { useState, useEffect, useContext } from "react";
import  {CartContext} from './../../App';
import "./common.css";

const Product = () => {
  let { categoryId } = useParams();
  const { totalItemInCart, 
        setTotalItemInCart, 
        cartItems, 
        setCartItems, 
        theme } = useContext(CartContext)

  const productItemIds = CategoryItems.filter(
    (x) => x.categoryId === categoryId
  ).map((item) => {
    return item.itemId;
  });

  const ProdItems = Items.filter((item) => productItemIds.includes(item.id));
  let total = 0;

  const addItemtoCart = (itemName) => {
    if (cartItems.length === 0) {
      setCartItems([...cartItems, { name: itemName, qty: 1 }]);
      return;
    }

    if (cartItems.filter((item) => item.name === itemName).length <= 0) {
      cartItems.push({ name: itemName, qty: 1 });
    } else {
      cartItems.map((item) => {
        if (item.name === itemName) {
          item.qty += 1;
        }
      });
    }

    setCartItems([...cartItems]);

  };


  useEffect(() => {
    let result = cartItems.reduce((first, last) => first + last.qty, 0)
    // result = cartItems.map(item => item.qty).reduce((a, b) => a + b, 0);
    setTotalItemInCart(result)

  }, [cartItems]);

  return (
    <>
      {ProdItems.map((item, index) => {
        return (
          <div className={theme}>
            <br />
            <div className="productItem"> {item.name}</div>
            <div onClick={() => addItemtoCart(item.name)}> + </div>
          </div>
        );
      })}
      
      {cartItems.map((item) => {

        return (
          <>
            <div>{item.name}</div>
            <div>{item.qty}</div>
          </>
        );
      })}

      {
        <div> Total Item in Cart : {totalItemInCart} </div>
      }
    </>
  );
};

export default Product;
