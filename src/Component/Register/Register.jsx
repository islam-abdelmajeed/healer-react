import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function Register() {
  // ******************Hook===>
    const navigat = useNavigate()
    const [isloding , setisloding]=useState(false)
    const [ErrorMsg, setErrorMsg]=useState('')
  // ******************yup

  const valid1 = yup.object({
    email: yup
      .string()
      .required("Email is valid")
      .matches(
        /[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gi,
        "not valid enter valid Email"
      ),
    password: yup
      .string()
      .required("password is valid")
      .matches(/^[A-Z]{2}[0-9]{1,6}$/gi, "not valid enter valid password"

      ),
      phone: yup
     .string()
     .required("phone is valid")
     .matches(/^01[0125][0-9]{8}$/gi,"not valid enter valid phone"),
      name: yup .string().required('name is valid') .min(3,"min length must be 3 characters").max(25 ,"Max length must be 25 characters")
  });
  //****************formik and send data
  let formik1 = useFormik({
    //1  initialValues
    initialValues: {
      name:"",
      email: "",
      password: "",
      phone:"",
      dateOfBirth:"",
      gender:""
    },
    // 2-  onSubmit and try - catch
    onSubmit:async(values)=>{

      console.log(values);
      setisloding(true)
      setErrorMsg('')
        try {
          let req= await axios.post("...#",values)
          console.log(req.data);
          // if(req.data.message =="done"){
          //   navigat ('/Login')
          // }
        } catch (error) {
          // setErrorMsg(error.req.data.message)
          setisloding(false)
        }
    },

    // 3 validationSchema
    validationSchema:valid1
  });
  return (
    <>
      <h1 className=" text-center fw-bold"> create an account</h1>
      <div className="form w-50 m-auto proudct ">

        <form className=" p-2" onSubmit={formik1.handleSubmit}>
          <label className="fw-bold" htmlFor="email">
            {" "}
            Email
          </label>
          <input onChange={formik1.handleChange} onBlur={formik1.handleBlur} className="form-control" type="email" id="email" name="email" />
          {formik1.errors && formik1.touched ? <p className=" fs-6 ">{formik1.errors.email}</p> :''}

          {/* name f&l */}
          <div className="name  ">
            <label className="fw-bold" htmlFor="fname">{" "}legal first name</label>
            <input  onChange={formik1.handleChange} onBlur={formik1.handleBlur} className="form-control" type="text" id="fname" name="name" />
            {formik1.errors && formik1.touched ? <p className=" fs-6 ">{formik1.errors.name}</p> :''}
            <label className="fw-bold" htmlFor="lname">
              {" "}
              legal last name
            </label>
            <input  onChange={formik1.handleChange} onBlur={formik1.handleBlur} className="form-control" type="text" id="lname" name="name" />
            {formik1.errors && formik1.touched ? <p className=" fs-6 ">{formik1.errors.name}</p> :''}
          </div>

          <label htmlFor="phone" className="fw-bold">phone</label>
          <input  onChange={formik1.handleChange} onBlur={formik1.handleBlur} type="tel" id="phone" name="phone"className="form-control "/>
          {formik1.errors && formik1.touched ? <p className="aler  fs-6">{formik1.errors.phone}</p>
          :""}
          <label className="fw-bold" htmlFor="dateOfBirth">
            Date of birth
          </label>
          <input
            className="form-control text-main"
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="mm/dd/yyyy"
            onChange={formik1.handleChange}
            onBlur={formik1.handleBlur}
          />
          

          <label className="fw-bold" htmlFor="password">
            {" "}
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={formik1.handleChange} onBlur={formik1.handleBlur}
          />
          {formik1.errors && formik1.touched ? <p className=" fs-6">{formik1.errors.password}</p>
          :""}
          <p className="text-main mt-2">Gender</p>
          
          <input  onChange={formik1.handleChange} onBlur={formik1.handleBlur} type="radio" id="Male" name="gender" value="Male" />
          
          <label className="text-main mb-1" htmlFor=" Male">
            Male{" "}
          </label>{" "}

          <br />

          <input
            className="mt-2"
            type="radio"
            id="Female"
            name="gender"
            value="Female"
            onChange={formik1.handleChange}
            onBlur={formik1.handleBlur}
          />
          <label className="text-main" htmlFor=" Female">
            Female{" "}
          </label>

          {ErrorMsg?<div className="alert alert-danger  mt-2">{ErrorMsg}</div>:''}

          {/* {isloding ?<button type="button" className="px-3 text-white btn bg-btn  d-block rounded-2 py-1"><i className="fa fa-spin fa-spinner px-3"></i></button>: <button disabled={!(formik1.isValid || formik1.isloding && formik1.dirty)} type="submit" className="btn bg-btn mt-5 w-100 text-white ">continue</button>} */}

          {isloding ? <button disabled  type="button" className="px-3 text-white btn bg-btn w-100 d-block rounded-2 py-1"> <i className="fa fa-spin fa-spinner px-3"></i></button>
        // eslint-disable-next-line no-mixed-operators
        : <button disabled={!(formik1.isValid || formik1.isloding && formik1.dirty)} type="submit" className="btn btn bg-btn w-100 text-white ">continue</button>
}
        </form>
      </div>
    </>
  );
}
