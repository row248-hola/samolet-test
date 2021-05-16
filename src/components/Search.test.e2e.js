import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Search from './Search';
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const SEARCH_ACTION_TYPE = 'SEARCH_QUERY_CHANGE';

describe('<Search />', () => {
  let WrappedComponent;
  let store;

  beforeEach(() => {
    store = mockStore();

    WrappedComponent = () => (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it('dispatches SEARCH_QUERY_CHANGE action on typing', () => {
    const wrapper = mount(<WrappedComponent />);
    const input = wrapper.find('input');

    const inputValue = 'Typed text';
    input.simulate('change', { target: { value: inputValue }});

    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(SEARCH_ACTION_TYPE);
    expect(actions[0].value).toEqual(inputValue);
  });
});
