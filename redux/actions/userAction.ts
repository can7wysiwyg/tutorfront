import axios from "axios"
import { GEN_ERROR, UPDATE_PIC } from "./types"
import { ApiUrl } from "@/helpers/ApiUrl"
import { getAccessToken } from "@/helpers/AccessToken"


export function updatePicture(id: string, data: any) {
    return async function(dispatch: any) {

        try {
            let accesstoken = getAccessToken()


            const response = await axios.put(`${ApiUrl}/user/profile_pic/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }
            })


            dispatch({type: UPDATE_PIC})
            alert(response.data.msg)
            window.location.href = "/"


            
        } catch (error) {
            console.error(error)
            dispatch({type: GEN_ERROR})
            throw error
        }

    }
}