import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Navbar Component', () => {
  test('renders the Navbar with correct cart count from Redux', () => {
    // Mocking the Redux state based on your cartSlice
    const store = mockStore({
      cart: { 
        cartItems: [{ id: 1, count: 2 }, { id: 2, count: 1 }] 
      }
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Total count should be 3 (2 + 1)
    expect(screen.getByText(/FakeStore React/i)).toBeInTheDocument();
    expect(screen.getByText(/🛒 Cart \(3\)/i)).toBeInTheDocument();
  });
});