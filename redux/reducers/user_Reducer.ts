import { GEN_ERROR, UPDATE_PIC } from "../actions/types"

interface UserState {
    msg: string | null
}


const initialState: UserState = {
    msg: null
}

export function userRdcr(state= initialState , action: any): UserState{

    switch(action.type) {
        case UPDATE_PIC:
            return{...state, msg: "success"}

        case GEN_ERROR:
            return{...state, msg: "there was a problem"}
            
        default:
            return state

    }
}