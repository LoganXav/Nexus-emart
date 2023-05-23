import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      if (item){
        item.quantity += action.payload.quantity
      } else{

        state.products.push(action.payload)
      }
    },
    increaseQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.products.find(item => item.id === id);
        if (item) {
          item.quantity += quantity;
        }
      },
      decreaseQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.products.find(item => item.id === id);
        if (item && item.quantity > 1) {
          item.quantity -= quantity;
        }
      },
    removeFromCart: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
    },
    resetCart: (state, action) => {
        state.products = []
    }
  },
})

export const {addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer