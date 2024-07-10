import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Posts').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div 
            key={key} 
            className='post' 
            onClick={() => navigate(`/post/${value.id}`)}
          >
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
