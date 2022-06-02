import React from 'react';
import createStore from 'redux';
import { Provider } from 'react-redux';

function ReduxApp01() {
  store = createStore((state) => state);
  return (
    <div>
      <Provider store={this.store}>리덕스 예제</Provider>
    </div>
  );
}

export default ReduxApp01;
