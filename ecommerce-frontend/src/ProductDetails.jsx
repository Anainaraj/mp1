import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  
  // For demo purposes, we will create a hardcoded product list
  const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', image: '/path-to-image-1.jpg' },
    { id: 2, name: 'Product 2', price: 150, description: 'Description for Product 2', image: '/path-to-image-2.jpg' },
    { id: 3, name: 'Product 3', price: 200, description: 'Description for Product 3', image: '/path-to-image-3.jpg' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
