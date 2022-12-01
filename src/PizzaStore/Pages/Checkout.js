import { useContext } from "react";

const Checkout = (props) => {

    const total = useContext(props.total);

    console.log("Checkout page total = ", total);
}

export default Checkout;