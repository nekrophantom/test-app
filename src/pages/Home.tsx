import { Link } from "react-router-dom";
import products from "../data/product";

const Home = () => {
    return (
        <div>
            <section className="hero">
                <div>
                <h1>Welcome To Rey Shop</h1>

                <p>
                    Find your favorite products with affordable prices
                </p>

                <Link to="/products">
                    <button className="shop-btn">
                    Shop Now
                    </button>
                </Link>
                </div>
            </section>

            <section className="featured">
                <div className="featured-header">
                    <h2>Featured Products</h2>

                    <Link to="/products">See All Products</Link>
                </div>

                <div className="grid">
                {
                    products.slice(0, 4).map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.name}/>

                            <h3>{product.name}</h3>

                            <p>
                                Rp {product.price.toLocaleString()}
                            </p>
                        </div>
                    ))
                }
                </div>
            </section>
        </div>
    );
};

export default Home;