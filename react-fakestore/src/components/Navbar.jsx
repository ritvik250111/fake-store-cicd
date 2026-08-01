import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <nav style={styles.nav}>
      <h2><Link to="/" style={styles.link}>FakeStore React</Link></h2>
      <div>
        <Link to="/cart" style={styles.link}>
          🛒 Cart ({totalCount})
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: 'white' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold' }
};