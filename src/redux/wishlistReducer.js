import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
  products: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      if (item){
        item.quantity += action.payload.quantity
      } else{
        state.products.push(action.payload)
      }
    },    
    removeFromWishlist: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
    },
    resetWishlist: (state, action) => {
        state.products = []
    }
  },
})

export const {addToWishlist, removeFromWishlist, resetWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer