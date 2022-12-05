import { useContext } from "react";
import  {CartContext} from './../../App';
import "./common.css";

const Checkout = (props) => {
  const { totalItemInCart, cartItems, theme } = useContext(CartContext);

  return (
    <>
      {cartItems.map((item) => {
        return (
          <div className={theme}>
            <div>{item.name} : </div>
            <div>{item.qty}</div> <br />
          </div>
        );
      })}
      <div> Total Items : {totalItemInCart} </div>
    </>
  );
};

export default Checkout;
