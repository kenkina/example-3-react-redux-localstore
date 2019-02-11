export const types = {
  REPLACE_PRODUCTS: 'REPLACE_PRODUCTS'
};

export const loadProducts = () => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/products');
    const products = await response.json();
    return dispatch({
      type: types.REPLACE_PRODUCTS,
      products
    });
  }
};