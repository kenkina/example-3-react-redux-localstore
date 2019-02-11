import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addToCart } from '../actionCreators/cart';
import { loadProducts } from '../actionCreators/products';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('action Creators', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('loads products', async () => {

    const store = mockStore({ products: [] });

    fetch.mockResponseOnce(JSON.stringify([
      { id: 1, name: 'Product 1', price: 100, image: '' },
      { id: 2, name: 'Product 2', price: 200, image: '' }
    ]));

    await store.dispatch(loadProducts());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe('REPLACE_PRODUCTS');
    expect(actions[0].products).not.toBeNull();
    expect(actions[0].products.length).toBe(2);
    expect(actions[0].products[0].id).toBe(1);
  });

  it('adds to cart', () => {
    const store = mockStore({ cart: [] });

    const product = {
      id: 1,
      name: "Ultimate",
      price: 300,
      image: ""
    };

    store.dispatch(addToCart(product));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe('ADD_TO_CART');
    expect(actions[0].product).not.toBeNull();
    expect(actions[0].product.id).toBe(1);
  });

});