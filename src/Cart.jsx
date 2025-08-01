import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem } from "./Store";
import "./Cart.css";const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-wrapper">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={`/images/${item.image}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decrement(item))}>-</button>
                <span> {item.quantity} </span>
                <button onClick={() => dispatch(increment(item))}>+</button>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeItem(item))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
