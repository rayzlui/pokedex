import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { RootContainer } from './containers/RootContainer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
