// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducer';
// import thunkMiddleware from 'redux-thunk'

// const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

// const store = createStore(  
//   rootReducer,
//   composerEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;