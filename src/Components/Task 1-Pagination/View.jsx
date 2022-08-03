import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import TableData from "./Table";

function View() {
  const [user,setUser]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const GetUsers = () => {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        setUser(res.data)
        console.log(res.data);
      });

      
 
  };
 
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
 



  useEffect(() => {
    GetUsers();
   
  }, []);

  return (
    <div >

     <TableData 
     user={currentPosts}
     />
     <div style={{marginLeft:'600px'}}>
      <center>
    <Pagination 
     postsPerPage={postsPerPage}
     totalPosts={user.length}
     paginate={paginate}
     />
     </center>
     </div>
    </div>
  );
}

export default View;
