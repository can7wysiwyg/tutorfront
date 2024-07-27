import { GEN_ERROR, GET_USERS, UPDATE_PIC } from "../actions/types"

interface UserState {
    msg: string | null,
    users: [] | null
}


const initialState: UserState = {
    msg: null,
    users: null
}

export function userRdcr(state= initialState , action: any): UserState{

    switch(action.type) {
        case UPDATE_PIC:
            return{...state, msg: "success"}

        case GET_USERS:
            return{...state, users: action.payload}    

        case GEN_ERROR:
            return{...state, msg: "there was a problem"}
            
        default:
            return state

    }
}