// Startup point for client side app

// console.log('Hi there!');
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
<Provider store={store}>
    <BrowserRouter>
        {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
</Provider>,
 document.querySelector('#root'));
