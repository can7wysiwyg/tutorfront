'use client'
 
import { getUser } from '@/redux/actions/authAction'
import { AppDispatch, RootState } from '@/redux/store'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./profile.module.css"
import Link from 'next/link'

export default function UserProfile() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.authReducer.user)
  const [fadeIn, setFadeIn] = useState(false);
    const userDetailsRef = useRef(null);



  useEffect(() => {

    const fetchUser = async() => {

      await dispatch(getUser())


    }

    fetchUser()


  }, [dispatch])
  
  
  useEffect(() => {
    setFadeIn(true);
  }, []);

  let editProfile: string = user._id
      



  return (
    <>
    <div
      className={`${styles['user-details']} ${fadeIn ? "fade-in" : ""}`}
      ref={userDetailsRef}
      style={{ marginTop: "3rem", textAlign: "center", fontFamily: "Helvetica" }}>
        <h5>edit <Link href={`/panel/profile/${editProfile}`}>my profile</Link></h5>






        </div>
    
  
    




</>
  )
}
