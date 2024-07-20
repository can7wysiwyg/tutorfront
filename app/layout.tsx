import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import NaviBar from "./NaviBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReduxProvider } from "../redux/provider";



export const metadata: Metadata = {
  title: "Tutor Finder",
  description: "The best site to find tutors on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"> </link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"   />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

    

      <body>

        
    <ReduxProvider>
    <NaviBar />
       

    {children}

    </ReduxProvider>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    

      
    


        
        </body>
    </html>
  );
}
