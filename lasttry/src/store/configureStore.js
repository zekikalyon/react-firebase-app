import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import ProductsReducer from '../reducers/products';
import authReducer from '../reducers/auth';
import OrdersReducer from '../reducers/orders';
import thunk  from 'redux-thunk';

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const configureStore = () => {
    const store = createStore(
        combineReducers({
          products : ProductsReducer,
          auth: authReducer,
          orderproducts:OrdersReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
      );
        return store;

}

export default configureStore;

