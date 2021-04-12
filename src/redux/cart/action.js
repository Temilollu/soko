export const addToCartAction = (payload) => ({
  type: "ADD_TO_CART",
  payload,
});


export const removeFromCartAction = (payload) => ({
  type: "REMOVE_FROM_CART",
  payload,
});

export const clearCart = () => ({
  type : "CLEAR_CART"
})