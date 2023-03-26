import React from 'react'; //React has webpack underneath the hood, so we can import it straight in without having to bundle or browserify
import ReactDOM from 'react-dom/client'; //ReactDOM is the glue that puts React together in web browsers specifically. ReactNative is for mobile apps, ReactVR for vr apps, etc
import './index.css'; //React allows us to add different CSS files to each different component. / means it is located in the same folder.
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
