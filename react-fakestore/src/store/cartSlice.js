// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Retrieve cart from session storage if it exists
const loadCartFromSession = () => {
  const savedCart = sessionStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  cartItems: loadCartFromSession(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartItems.push({ ...product, count: 1 });
      }
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    checkoutCart: (state) => {
      state.cartItems = [];
      sessionStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, checkoutCart } = cartSlice.actions;
export default cartSlice.reducer;