import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/rootReducer';

const store=configureStore({
    reducer:rootReducer
})
// const store=createStore(rootReducer,composeWithDevTools())

export default store