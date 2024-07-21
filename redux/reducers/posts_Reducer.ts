import { MAKE_POST, POST_ERROR, SHOW_POSTS } from "../actions/types"

interface PostState {
    msg: string | null,
    subjects: [] | null
}

const initialState: PostState = {
    msg: null,
    subjects: null
}

export function postReducer(state= initialState , action: any): PostState{

    switch(action.type) {
        case MAKE_POST:
            return{...state, msg: "success"}

        case SHOW_POSTS:
            return{...state, subjects: action.payload}    

        case POST_ERROR:
            return{...state, msg: "success"}
            
        default:
            return state    

    }


}