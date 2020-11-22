import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { GET_FORM_VALUE } from './constant';

import rootReducer from './reducer/rootReducer'

const store=configureStore({
    reducer:rootReducer,
    // customizedMiddleware:getDefaultMiddleware({
    //     serializableCheck: false
    //  })
     middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [GET_FORM_VALUE],
        },
      }),
})



export default store