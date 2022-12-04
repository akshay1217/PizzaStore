import {useHistory} from "react-router-dom";
import {Category} from "../fixtures/Category";
import "./home.css"

const Home = () => {
    const history = useHistory();  
    const traversePage = (categotyId) => {
       history.push(`/product/${categotyId}`); 
   }

    return (
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
    )
    
}

export default Home;