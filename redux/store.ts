import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth_Reducer";
import { postReducer } from "./reducers/posts_Reducer";
import { userRdcr } from "./reducers/user_Reducer";




export const store = configureStore({
    reducer: {

        authReducer,
        postReducer,
        userRdcr
        
    

    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })

    }

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;