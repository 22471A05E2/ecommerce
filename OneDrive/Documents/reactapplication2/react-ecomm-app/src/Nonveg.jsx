import './Nonveg.css';
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";

function Nonveg() {
    const dispatch = useDispatch();
    const nonvegProducts = useSelector((state) => state.products.nonveg);

    const handleAddtocart = (product) => {
        dispatch(addtocart(product));
    };

    return (
        <div className="nonveg-container">
            <h1>Non Veg Items</h1>
            <div className="nonveg-grid">
                {nonvegProducts.map((product, index) => (
                    <div key={index} className="nonveg-card">
                        <img src={`/images/${product.image}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹ {product.price}</p>
                        <button onClick={() => handleAddtocart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nonveg;
