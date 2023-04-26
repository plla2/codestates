import { createStore } from 'redux';
import SubscribersReducer from './subscribers/reducer';

const store = createStore(SubscribersReducer)

export default store