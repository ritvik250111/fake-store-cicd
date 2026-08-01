import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
  };

  return (
    <div style={styles.card}>
      <img 
        src={product.image} 
        alt={product.title} 
        onError={handleImageError} 
        style={styles.image} 
      />
      <h4>{product.title}</h4>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.description}>{product.description.substring(0, 80)}...</p>
      <p>⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>
      <h3>${product.price.toFixed(2)}</h3>
      <button onClick={() => dispatch(addToCart(product))} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: { border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column' },
  image: { width: '100%', height: '200px', objectFit: 'contain' },
  category: { color: 'gray', textTransform: 'uppercase', fontSize: '0.8rem' },
  description: { fontSize: '0.9rem', color: '#555', flexGrow: 1 },
  button: { background: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }
};