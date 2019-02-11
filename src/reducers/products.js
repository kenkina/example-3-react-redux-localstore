import { types } from '../actionCreators/products';


export const products = (state = [], action) => {
  switch (action.type) {
    case types.REPLACE_PRODUCTS: {
      return action.products;
    }
    default:
      return state;
  }
}