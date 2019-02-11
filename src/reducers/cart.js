import { types } from '../actionCreators/cart';


export const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return state.concat(action.product);
    }
    case types.REMOVE_FROM_CART: {
      return state.filter((product) => {
        return product.id !== action.productId;
      });
    }
    default:
      return state;
  }
}