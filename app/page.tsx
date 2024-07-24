"use client"
import { viewPosts } from "@/redux/actions/postAction";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCheck from "./ProfileCheck";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const subjects = useSelector((state: RootState) => state.postReducer.subjects)


  useEffect(() => {


    const fetchPosts = async() => {

      try {

        await dispatch(viewPosts())
        
      } catch (error) {
        console.error(error)
      }


    }

    fetchPosts()



  }, [dispatch])


// console.log(subjects)
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {
        ProfileCheck()
      }

      <h4>welcome paul</h4>

      <h4><Link href="/users">USERS</Link> </h4>
        
      
          </main>
  );
}
