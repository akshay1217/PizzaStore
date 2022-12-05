import {useHistory} from "react-router-dom";
import {useContext} from "react";
import  {CartContext} from './../../App';
import {Category} from "../fixtures/Category";

import "./home.css"

const Home = () => {
    const history = useHistory();  
  const {theme} = useContext(CartContext);

    const traversePage = (categotyId) => {
       history.push(`/product/${categotyId}`); 
   }

    return (
        <div className={theme} >
            {
                Category.map((item, index)=>{
                    return(
                        <>
                        <br/>
                        <div className="category" onClick={()=>traversePage(item.id)}>
                        {item.name}
                        </div>
                    
                        </>
                    )
                })
             } 
        </div>  
    )
    
}

export default Home;