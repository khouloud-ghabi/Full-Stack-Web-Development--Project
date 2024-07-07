import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/Posts').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className='post' key={key}>
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
