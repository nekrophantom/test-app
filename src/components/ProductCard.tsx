import React from 'react'
import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({product, addToCart}: Props) => {
    return (
        <Link to={`/products/${product.id}`} className='card-link'>
            <div className="card">
                <img
                    src={product.image}
                    alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>
                    Rp {product.price.toLocaleString()}
                </p>


                <div className="card-buttons">
                    
                    <span className="detail-text">
                        Click for more detail
                    </span>
                    
                    <button onClick={(e) => {
                        e.preventDefault();

                        addToCart(product);
                    }}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard