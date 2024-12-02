import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './Home.css'; // Import the CSS file for custom styles
import { ImGift } from 'react-icons/im';
import iphone from './iphone.jpg';
import shirt from './shirt.jpg';
import tshirt from './tshirt.jpg';
import shoe from './shoe.jpg';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import camera from './camera.jpg';
import nexashoes from './nexashoes.jpg';

function Home() {
  const [products] = useState([
    { id: 1, name: 'Iphone', price: 100, category: 'Electronics',image: iphone},
    { id: 2, name: 'Shirt', price: 150, category: 'Clothing', image: shirt },
    { id: 3, name: 'T-shirt', price: 200, category: 'Clothing', image: tshirt },
    { id: 4, name: 'Shoe', price: 80, category: 'Footwears', image: shoe},
    { id: 5, name: 'Book1', price: 250, category: 'Books', image:book1  },
    { id: 6, name: 'Book2', price: 120, category: 'Books', image: book2 },
    { id: 7, name: 'camera', price: 150, category: 'Electronics', image: camera },
    { id: 8, name: 'nexashoes', price: 150, category: 'Footwears', image: nexashoes},
  ]);

  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleCategoryFilter = (category) => setFilterCategory(category);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const filteredProducts = products
    .filter((product) => (
      (filterCategory === '' || product.category === filterCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div className="home">
      <h1 className="home-title">Shop Our Products</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchTerm} 
          onChange={handleSearchChange}
        />
      </div>

      {/* Filters */}
      <div className="filters">
      <button className="filter-btn" onClick={() => handleCategoryFilter('Home')}>Home</button>
        <button className="filter-btn" onClick={() => handleCategoryFilter('Electronics')}>Electronics</button>
        <button className="filter-btn" onClick={() => handleCategoryFilter('Clothing')}>Clothing</button>
        <button className="filter-btn" onClick={() => handleCategoryFilter('Books')}>Books</button>
        <button className="filter-btn" onClick={() => handleCategoryFilter('Footwears')}>Footwears</button>

        <button className="filter-btn reset" onClick={() => setFilterCategory('')}>Reset Filters</button>

        <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {filteredProducts.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* All Products */}
      <h2>All Products</h2>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
