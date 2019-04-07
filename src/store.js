import {
    createStore, combineReducers,
    applyMiddleware, compose
  } from 'redux';
  import thunk from 'redux-thunk';
  
  import authReducer from './auth/reducer';
//   import coursesReducer from './courses/reducer';
  
  const rootReducer = combineReducers({
    auth: authReducer,
    // courses: coursesReducer,
  });
  
  const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const middleware = [thunk];
  
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  
  export default store;