import { cart as cartReducer } from "../reducers/cart";
import { products as productsReducer } from "../reducers/products";


describe('products', () => {
  it('returns initial state', () => {
    expect(productsReducer(undefined, {})).toEqual([]);
  });

  it('receives products', () => {
    const products = [{
      id: 1,
      name: "Ultimate",
      price: 300,
      image: ""
    }];

    expect(
      productsReducer([], { type: 'REPLACE_PRODUCTS', products })
    ).toEqual(products);
  });
});