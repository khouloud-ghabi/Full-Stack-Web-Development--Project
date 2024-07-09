import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreatePost() {
           const initialValues = {
            title:"",
            PostText:"",
            userName:"",
           }

           const onSubmit = (data) =>{
                console.log(data);
           };

           const validationSchema = Yup.object().shape({
            title: Yup.string().required(),
            PostText:Yup.string().required(),
            userName:Yup.string().min(3).max(15).required(),
           });


  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer' >
                <label>Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field 
                autocomplete="off"
                id="inputCreatePost" 
                name="title" 
                placeholder="(Ex. title....)"/>

                <label>Post: </label>
                <ErrorMessage name="postText" component="span" />
                <Field 
                autocomplete="off"
                id="inputCreatePost" 
                name="postText" 
                placeholder="(Ex. post....)"/>

                
                <label>UserName: </label>
                <ErrorMessage name="userName" component="span" />
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