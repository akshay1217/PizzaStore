import { useContext } from "react";
import  {CartContext} from './../../App';

const Checkout = (props) => {
  const { totalItemInCart, cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.map((item) => {
        return (
          <>
            <div>{item.name} : </div>
            <div>{item.qty}</div> <br />
          </>
        );
      })}
      <div> Total Items : {totalItemInCart} </div>
    </>
  );
};

export default Checkout;
