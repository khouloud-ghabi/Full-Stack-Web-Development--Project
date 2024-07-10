import React ,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
function Post() {
    let {id} = useParams();
    const [postObject,setPostObject] = useState({});
    useEffect(() => {
        axios.get('http://localhost:3001/Posts/byId/${id}').then((response) => {
        setPostObject(response.data);
        });
      });


  return (
    <div className='postPage'>
      <div className='leftSide'></div>
      <div className='rightSide'></div>
      </div>
  )
}

export default Post