const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      // Redux Toolkit uses immer js behind the scene.
      state.items.push(action.payload);
    },
    removeCart: (state) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // console.log("state---", state); // this won't log actual state, but a proxy object
      // console.log("state---", current(state)); // We have to use `current` to log the state

      //Note: either mutate the existing state or return the new state
      state.items.length = 0; // or -> return {items: []};
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
