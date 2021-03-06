import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {rootReducer} from './src/store/reducers';
import Thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const initialState = {data: {films: [], favouriteFilms: []}};
const store = createStore(rootReducer, initialState, applyMiddleware(Thunk));

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxApp);
