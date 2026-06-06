import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/product";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="detail-wrapper">
      <div className="detail">
        <img src={product.image} alt={product.name}/>

        <div className="detail-content">
          <h1>{product.name}</h1>

          <p className="detail-description">
            {product.description}
          </p>

          <h2 className="detail-price">
            Rp {product.price.toLocaleString()}
          </h2>

          <button className="detail-btn" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;