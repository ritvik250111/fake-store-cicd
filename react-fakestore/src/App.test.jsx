import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store'; // Import your actual Redux store
import Navbar from './components/Navbar';
import { addToCart } from './store/cartSlice'; // Assuming this is your action
import '@testing-library/jest-dom';

describe('Cart Integration', () => {
  test('updates the Navbar cart count when an item is dispatched to Redux', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Initially, cart should be 0
    expect(screen.getByText(/🛒 Cart \(0\)/i)).toBeInTheDocument();

    // Simulate the action that your ProductCard "Add to Cart" button would trigger
    store.dispatch(addToCart({ id: 1, title: 'Test Product', count: 1 }));

    // The Navbar should automatically update to reflect the Redux state change
    expect(await screen.findByText(/🛒 Cart \(1\)/i)).toBeInTheDocument();
  });
});