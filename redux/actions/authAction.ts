import axios from "axios"
import { AUTHENTICATION_ERROR, GET_USER, LOGIN_USER, REGISTER_USER } from "./types"
import { ApiUrl } from "@/helpers/ApiUrl"
import { getAccessToken } from "@/helpers/AccessToken"


export function registerUser(data: any) {

    return async function (dispatch: any) {

        try {

            const response = await axios.post(`${ApiUrl}/auth/register`, data)
            dispatch({type: REGISTER_USER})
            alert(response.data.msg)
            window.location.href = "/authentication/login"
            
        } catch (error) {
            console.error("there was a problem")
            dispatch({type: AUTHENTICATION_ERROR})
            throw error
        }
        
    }


}



export function loginUser(data: any) {

    return async function (dispatch: any) {

        try {

            const response = await axios.post(`${ApiUrl}/auth/login`, data)
            dispatch({type: LOGIN_USER})

            if(response.data.msg) {

                alert(response.data.msg)


            } else {
                localStorage.setItem("accesstoken", response.data.accesstoken)
                window.location.href = "/"

            }
           
            
            
        } catch (error) {
            console.error("there was a problem")
            dispatch({type: AUTHENTICATION_ERROR})
            throw error
        }
        
    }


}



export function getUser() {

    return async function (dispatch: any) {

        try {

            const accessToken = getAccessToken();

            if(!accessToken || accessToken === undefined || accessToken === null) {
                return ""
            }

            

            const response = await axios.get(`${ApiUrl}/auth/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            const user = response.data.user

            dispatch({type: GET_USER, payload: user})


            
        } catch (error) {

            console.error("there was a problem")
            dispatch({type: AUTHENTICATION_ERROR})
            throw error
            
        }
        
    }

}