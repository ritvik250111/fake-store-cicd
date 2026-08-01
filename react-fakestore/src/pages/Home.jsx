// src/pages/Home.jsx
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from '../api/fakeStoreApi';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch Categories
  const { data: categories = [], isLoading: loadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Fetch Products (either all, or by category)
  const { data: products = [], isLoading: loadingProducts, isError } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => selectedCategory ? fetchProductsByCategory(selectedCategory) : fetchAllProducts(),
  });

  if (loadingCategories || loadingProducts) return <p>Loading store...</p>;
  if (isError) return <p>Error loading products. Please try again.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <label>Filter by Category: </label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        >
          <option value="">All Products</option>
          {categories.map((cat) => (
             <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }
};