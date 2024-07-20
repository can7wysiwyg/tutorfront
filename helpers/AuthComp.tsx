'use client'

import Link from "next/link";
import { getAccessToken } from "./AccessToken";
import { logoutUser } from "./logout";





export function AuthComp() {

  const accessToken = getAccessToken();


  const checkAuth = () => {
    

    
    if (accessToken === null) {
      return (
        <>
          <Link className="nav-link" href="/authentication/login">LOGIN</Link>
        </>
      );
    }

    
    return (
      <>
        <Link href="#c" className="nav-link" style={{ cursor: "pointer" }} onClick={logoutUser}>
          LOGOUT
        </Link>
      </>
    );
  }

  return (
    <>
      {checkAuth()}
    </>
  );
}
