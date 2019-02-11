export const types = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product
});

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  productId: productId
});