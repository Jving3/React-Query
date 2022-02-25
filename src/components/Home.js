import { useContext } from "react";
import { ProduccionContext } from "../context/ProduccionContext";

const Home = () => {

    
    const { picking, putaway  } = useContext(ProduccionContext);


    return ( 
        <div>
            <h1>{picking} - {putaway}</h1>
        </div>
     );
}
 
export default Home;