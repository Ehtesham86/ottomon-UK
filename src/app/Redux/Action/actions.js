// actions.js
export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const removeCart = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
