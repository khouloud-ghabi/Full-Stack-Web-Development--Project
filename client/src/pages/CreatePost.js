import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {
  return (
    <div className='createPostPage'>
        <Formik>
            <Form className='formContainer' >
                <label>Title: </label>
                <Field 
                autocomplete="off"
                id="inputCreatePost" 
                name="title" 
                placeholder="(Ex. khouloud....)"/>

                <label>Post: </label>
                <Field 
                autocomplete="off"
                id="inputCreatePost" 
                name="postText" 
                placeholder="(Ex. post....)"/>

                
                <label>UserName: </label>
                <Field 
                autocomplete="off"
                id="inputCreatePost" 
                name="userName" 
                placeholder="(Ex. name....)"/>

                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
        </div>
  )
}

export default CreatePost