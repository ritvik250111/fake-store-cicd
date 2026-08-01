import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkoutCart } from '../store/cartSlice';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [checkoutStatus, setCheckoutStatus] = useState('');

  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);

  const handleCheckout = () => {
    dispatch(checkoutCart());
    setCheckoutStatus('Checkout successful! Your cart has been cleared.');
    setTimeout(() => setCheckoutStatus(''), 5000); // Clear message after 5s
  };

  if (checkoutStatus) return <h2 style={styles.center}>{checkoutStatus}</h2>;
  if (cartItems.length === 0) return <h2 style={styles.center}>Your cart is currently empty.</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div style={{ flexGrow: 1, padding: '0 1rem' }}>
            <h4>{item.title}</h4>
            <p>Qty: {item.count} | Price: ${item.price.toFixed(2)}</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>${(item.price * item.count).toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={styles.removeBtn}>
              Remove
            </button>
          </div>
        </div>
      ))}
      
      <div style={styles.totalsBox}>
        <h3>Total Items: {totalCount}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleCheckout} style={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  center: { textAlign: 'center', marginTop: '3rem' },
  cartItem: { display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '1rem 0' },
  image: { width: '80px', height: '80px', objectFit: 'contain' },
  removeBtn: { background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' },
  totalsBox: { marginTop: '2rem', padding: '1rem', background: '#f9f9f9', textAlign: 'right', border: '1px solid #ddd' },
  checkoutBtn: { background: 'green', color: 'white', padding: '10px 20px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }
};