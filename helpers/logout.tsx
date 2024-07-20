'use client'



export const logoutUser = () => {
    localStorage.removeItem("accesstoken")


   window.location.href = "/"

    
}