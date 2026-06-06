import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import products from "../data/product";


const Products = () => {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search product..."
        className="search-input"
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="grid">
        {
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Products;