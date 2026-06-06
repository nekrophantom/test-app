import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <h1>Please Add Items to Cart</h1>
      ) : (
        <>
          {cartItems.map((product) => (
            <div
              className="cart-item"
              key={product.id}
            >
              <div>
                <h3>{product.name}</h3>

                <p>
                  Rp {product.price.toLocaleString()}
                </p>

                <p>Qty: {product.qty}</p>
              </div>

              <button onClick={() =>
                  removeFromCart(product.id)
                }>
                {
                  product.qty > 1
                    ? `- 1 Qty`
                    : `Remove Item`
                }
              </button>
            </div>
          ))}

          <h2>
            Total: Rp{" "}
            {total.toLocaleString()}
          </h2>

          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;