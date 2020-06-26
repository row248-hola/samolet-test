import { createStore as createReduxStore } from 'redux';

const defaultState = {
  value: '',
};

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'SEARCH_QUERY_CHANGE': {
      return {
        value: action.value
      }
    }
    default: {
      return defaultState;
    }
  }
};

const createStore = () => {
  return createReduxStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export {
  createStore
};
