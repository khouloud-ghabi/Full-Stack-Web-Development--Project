import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Registration() {
    
    const initialValues = {
            userName: "",
            password:"",
      };  
      const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
      });
    
    
      const onSubmit=(data)=>{
        axios.post("http://localhost:3001/auth",data).then(()=>{
            console.log(data);
        });
      };

  return (
    <div> <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form className="formContainer">
      <label>Username: </label>
      <ErrorMessage name="userName" component="span" />
      <Field
        autoComplete="off"
        id="inputCreatePost"
        name="userName"
        placeholder="(your name.....)"
      />
      <label>Password: </label>
      <ErrorMessage name="password" component="span" />
      <Field
        autoComplete="off"
        id="inputCreatePost"
        name="password"
        placeholder="(your password.....)"
      />

      <button type="submit"> Register</button>
    </Form>
  </Formik></div>
  )
}

export default Registration