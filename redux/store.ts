import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth_Reducer";


export const store = configureStore({
    reducer: {

        authReducer
        
    

    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })

    }

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;