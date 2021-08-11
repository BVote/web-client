import React, { useEffect } from 'react'

const NotFound = () => {

  useEffect(() => {
    // update the document title
    document.title = "404 | BVote";
  });

  return (
    <div>

      <h3 style={{textAlign:"center"}}>🙁 404 page not found <br/><br/> 
      We are sorry but the page you are looking for does not exist.</h3>
    </div>
  );
    
};
  

export default NotFound;
