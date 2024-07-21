import axios from "axios"
import { MAKE_POST, POST_ERROR, SHOW_POSTS } from "./types"
import { ApiUrl } from "@/helpers/ApiUrl"
import { getAccessToken } from "@/helpers/AccessToken"




export function makePost(data: any) {

    return async function(dispatch: any) {

        try {

            const accessToken = getAccessToken()

            const response = await axios.post(`${ApiUrl}/subject/create_subject`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

              dispatch({type: MAKE_POST})
              alert(response.data.msg)

              window.location.href = "/"
            
        } catch (error) {
            console.error(error)
            dispatch({type: POST_ERROR})
            throw error
        }

    }

}



export function viewPosts() {
    return async function(dispatch: any) {

        try {

            const response = await axios.get(`${ApiUrl}/subject/show_all`)
            const subjects: [] = response.data.subjects

            dispatch({type: SHOW_POSTS, payload: subjects})

            


            
        } catch (error) {
            
        }
    }
}