import './Veg.css';
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";

function Veg() {
    const dispatch = useDispatch();
    const vegProducts = useSelector((state) => state.products.veg);

    const handleAddtocart = (product) => {
        dispatch(addtocart(product));
    };

    return (
        <div className="veg-container">
        <video autoPlay muted loop className="background-video">
        <source src="/videos/veg.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            <h2>Veg Items</h2>
            <div className="veg-grid">
                {vegProducts.map((product, index) => (
                    <div key={index} className="veg-card">
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

export default Veg;
