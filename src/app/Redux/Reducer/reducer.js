// reducer.js
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem !== action.payload),
      };
    case "CLEAR_CART": // Add this case
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
