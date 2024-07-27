"use client"
import { viewPosts } from "@/redux/actions/postAction";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCheck from "./ProfileCheck";
import { getUsers } from "@/redux/actions/userAction";
import moment from "moment";
import Image from "next/image";

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


  

  return (
    
    <main >

      {
        ProfileCheck()
      }

      {

        Array.isArray(subjects) ? subjects?.map((subject: any) => (
          


            <ShowPosts key={subject._id} subject={subject} /> 

            


        )) : <p>loading</p>


      }  
      
          </main>
          
  );
}


type ShowPostsProps = {
  subject: any; 
};


interface Person {
  userImage: string,
  fullname: string,
  _id: string

}

const ShowPosts: React.FC<ShowPostsProps> = ({ subject }) => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state: RootState) => state.userRdcr.users)

  const[person, setPerson] = useState<Person>({
    userImage: "",
    fullname: "",
    _id: ""
  })
  const [isExpanded, setIsExpanded] = useState(false);


  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


   
 
  useEffect(() => {

    const fetchUsers = async() => {

      try {

        await dispatch(getUsers())
        
      } catch (error) {
        console.error("there was a problem")
      }

    }

    fetchUsers()


   }, [dispatch])


   
 useEffect(() => {

    if(subject.subjectOwner) {

      users?.forEach((user: any) => {
        if (user._id ===  subject.subjectOwner) setPerson(user);
      });

    


    }




  }, [subject.subjectOwner, users])





  const {subjectCommentary} = subject
  const maxChars = 90

  const shouldShowSeeMore = subjectCommentary.length > maxChars;

     

  return (
    <div className="row d-flex align-items-center justify-content-center" style={{marginTop: "2px"}}>
      <div className="col-md-6">

    <div className="mycard">
                <div className="d-flex justify-content-between p-2 px-3">
            <div className="d-flex flex-row align-items-center">
           
          <Image
            src={person.userImage}
            alt={person.fullname}
            width={50}
            height={50}
            className="rounded-circle"
          />
          <div className="d-flex flex-column ml-2">
                {" "}
                <a href={`/person_profile/${person._id}`} className="card-link" style={{textDecoration: "none"}}>  
                 <span className="font-weight-bold">  {person.fullname}   </span> </a> {" "}
                <small className="text-primary">{ moment(subject.updatedAt).format('LLLL')} </small>{" "}
              </div>

           

            </div>
            
          </div>{" "}
          <div className="p-2">
          <h5 className="text-justify">
             <Link href={`/post_single/${subject._id}`} style={{textDecorationLine: "none"}}> {subject.subjectName} </Link>
            </h5>

            <span className="text-justify">MK{subject.subjectPrice}</span>
            <p  style={{fontSize: "18px"}}>

            {isExpanded ? subjectCommentary : subjectCommentary.slice(0, maxChars)}
        {shouldShowSeeMore && (
          <span onClick={toggleExpansion}>
            {isExpanded ? `` : <Link href={`/post_single/${subject._id}`}>see more</Link> }
          </span>
        )}





              </p>

              <hr />





            </div>








              
              


</div>
</div>
      
    
    </div>
  );
};
