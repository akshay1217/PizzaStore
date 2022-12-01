import { useParams } from "react-router-dom";
import { CategoryItems } from "../fixtures/Category-item";
import { Items } from "../fixtures/Items";
import "./product.css";
import { useState, useEffect, useContext, createContext } from "react";
import Checkout from "./Checkout"

const Product = () => {
  let { categoryId } = useParams();
  const [cart, setCart] = useState([]);
  const UserContext = createContext();

  const productItemIds = CategoryItems.filter(
    (x) => x.categoryId === categoryId
  ).map((item) => {
    return item.itemId;
  });

  const ProdItems = Items.filter((item) => productItemIds.includes(item.id));
  const [totalItemInCart, setTotalItemInCart] = useState(0);
  let total = 0;

  const addItemtoCart = (itemName) => {
    if (cart.length === 0) {
      setCart([...cart, { name: itemName, qty: 1 }]);
      return;
    }

    if (cart.filter((item) => item.name === itemName).length <= 0) {
      cart.push({ name: itemName, qty: 1 });
    } else {
      cart.map((item) => {
        if (item.name === itemName) {
          item.qty += 1;
        }
      });
    }

    setCart([...cart]);

  };


  useEffect(() => {
    
    let result = cart.reduce((first, last) => first + last.qty, 0)
 // result = cart.map(item => item.qty).reduce((a, b) => a + b, 0);


 console.log("From use Effect",result);

//  <UserContext.Provider value={result}>
//    <Checkout total={result} />
//  </UserContext.Provider>

 setTotalItemInCart(result)

  }, [cart]);

  return (
    <>
      {ProdItems.map((item, index) => {
        return (
          <>
            <br />
            <div className="productItem"> {item.name}</div>
            <div onClick={() => addItemtoCart(item.name)}> + </div>
          </>
        );
      })}
      
      {cart.map((item) => {

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
