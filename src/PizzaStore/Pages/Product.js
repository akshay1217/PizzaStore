import { useParams } from "react-router-dom";
import { CategoryItems } from "../fixtures/Category-item";
import { Items } from "../fixtures/Items";
import "./product.css";
import { useState } from "react";

const Product = () => {
  let { categoryId } = useParams();
  const [cart, setCart] = useState([]);

  const productItemIds = CategoryItems.filter(
    (x) => x.categoryId === categoryId
  ).map((item) => {
    return item.itemId;
  });

  const ProdItems = Items.filter((item) => productItemIds.includes(item.id));

  const addItemtoCart = (itemName) => {
    if (cart.length === 0) {
      setCart([...cart, { name: itemName, qty: 1 }]);
      return;
    }

    if (cart.filter((item) => item.name === itemName).length <= 0) {
      cart.push({ name: itemName, qty: 1 });
    } else {
      cart.map((item) => {
        console.log("inside");
        if (item.name === itemName) {
          console.log("Clicked Item", item.name);
          item.qty += 1;
        }
      });
    }

    setCart([...cart]);
  };

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
    </>
  );
};

export default Product;
