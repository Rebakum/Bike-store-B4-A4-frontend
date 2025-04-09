import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface ICartItem {
  inStock: boolean;
  description: string;
  model: string;
  category: string;
  brand: string;
  image: string;
  _id: string; // Product ID
  name: string;
  price: number;
  selectQuantity: number;
  quantity: number;
}

// Define the structure of the cart state
interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state for the cart
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Unique identifier for toast messages
const toastId = { id: "toastID" };

// Create the cart slice using Redux Toolkit
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add an item to the cart
    addToCart(state, action: PayloadAction<ICartItem>) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        toast.warning("Item already in cart", toastId); // Show warning if already added
      } else {
        state.items.push(action.payload);
        toast.success("Item added to cart", toastId); // Show success message
        state.totalQuantity += action.payload.selectQuantity;
        state.totalPrice +=
          action.payload.price * action.payload.selectQuantity;
      }
    },

    //  remove an item from the cart
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item._id === itemId);
      if (existingItem) {
        state.totalQuantity -= existingItem.selectQuantity;
        state.totalPrice -= existingItem.price * existingItem.selectQuantity;
        state.items = state.items.filter((item) => item._id !== itemId);
      }
    },

    //  update the quantity of a product in the cart
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; selectQuantity: number }>
    ) {
      const { id, selectQuantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);
      if (existingItem && selectQuantity > 0) {
        const quantityDifference = selectQuantity - existingItem.selectQuantity;
        existingItem.selectQuantity = selectQuantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.price;
      }
    },

    //  clear all items from the cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions to be dispatched
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// Export the reducer to be added to the store
export default cartSlice.reducer;
