import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/Posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      if (Array.isArray(response.data)) {
        setComments(response.data);
      } else {
        console.error("Fetched comments are not an array:", response.data);
        setComments([]);
      }
    }).catch(error => {
      console.error("Error fetching comments:", error);
      setComments([]);
    });
  }, [id]);

  const addComment = () => {
    axios.post(`http://localhost:3001/comments`, {
      PostId: id,
      commentBody: newComment
    }).then((response) => {
      setComments([...comments, response.data]);
      setNewComment("");
    }).catch(error => {
      console.error("Error adding comment:", error);
    });
  };

  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className='title'>{postObject.title}</div>
        <div className='body'>{postObject.postText}</div>
        <div className='footer'>{postObject.userName}</div>
      </div>
      <div className='rightSide'>
        <div className='addCommentContainer'>
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => (
            <div key={key} className="comment">
              {comment.commentBody}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
