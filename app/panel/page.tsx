'use client'
import React from 'react'
import Link from 'next/link';




export default function page() {

    let myposts;
    


  return (
    <>
    <div style={{marginTop: "4rem"}}>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4 animated-card">
          <div className="card text-white bg-primary">
            <div className="card-body text-center">
            

              <h5 className="card-title mt-2"><Link href="/profile" style={{color: "white"}}> My Profile </Link></h5>
              <p className="card-text">Manage your profile here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 animated-card">
          <div className="card text-white bg-success">
            <div className="card-body text-center">
        

              <h5 className="card-title mt-2"> <Link href="/makepost" style={{color: "white"}}>Make Post </Link></h5>
              <p className="card-text">Make a new tutoring post.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 animated-card">
          <div className="card text-white bg-danger">
            <div className="card-body text-center">
            <i className="icon fas fa-users"></i>

              <h5 className="card-title mt-2"> <Link href={`/panel/${myposts}`} style={{color: "white"}}> My Posts</Link></h5>
              <p className="card-text">See your posted tutorials.</p>

            </div>
          </div>
        </div>



      </div>
    </div>


    
   </div> 
    
    </>


    
  )
}
