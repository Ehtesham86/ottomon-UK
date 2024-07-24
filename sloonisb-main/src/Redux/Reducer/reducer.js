const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
      case "REMOVE_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id),
        };

  }
  return state;
};
export default cartReducer;
