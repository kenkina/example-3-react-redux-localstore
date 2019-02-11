import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedProductList, { ProductList } from '../../components/ProductList';


const mockStore = configureStore();

it('shallow: renders no products when store is empty', () => {
  const wrapper = shallow(<ProductList products={[]} />);
  expect(wrapper.find(".product").length).toBe(0);
});

it('render: renders no products when store is empty', () => {
  const store = mockStore({
    products: [{
      id: 1,
      name: "Ultimate",
      price: 300,
      image: ""
    }]
  });

  const wrapper = render(
    <Provider store={store}>
      <ConnectedProductList />
    </Provider>
  );

  expect(wrapper.find(".product").length).toBe(1);
});

it('mount: adds a product to the shopping cart', () => {
  const store = mockStore({
    products: [{
      id: 1,
      name: "Ultimate",
      price: 300,
      image: ""
    }]
  });

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedProductList />
    </Provider>
  );
  wrapper.find('#product-1 button').simulate('click');

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();
});