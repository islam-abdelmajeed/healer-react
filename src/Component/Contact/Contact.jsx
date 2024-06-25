import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import imageContact from '../../Image Assets/img/contact/image-contact.jpg';

export default function Contact() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  console.log(values);

  return (
    <div className='contact-page'>
      <div className='container py-5'>
        {/* The Row */}
        <div className='row gap-5 align-items-center justify-content-center'>

          {/* # Contact # */}
          <div className='image-contact col-lg-5'>
            <img
              src={imageContact}
              alt='contact'
              className='img-fluid rounded-3'
            />
          </div>

          {/* # Form Contact # */}
          <div className='form-contact col-lg-5'>
            <h1
              className='head-title primary-color fw-medium mb-4 fs-3'
            >Let's Discuss With You</h1>
            <Formik
              initialValues={{ name: '', email: '', message: '', phone: '' }}
              validationSchema={Yup.object().shape({
                // Name Validation:
                name: Yup.string()
                  .required("Name is required!")
                  .min(4, "Minimum length is 4 characters!")
                  .max(30, "Maximum length is 30 characters!"),
                // Phone Validation:
                phone: Yup.number(),
                // Email Validation:
                email: Yup.string()
                  .required("Email is required!")
                  .email("Invalid email!"),
                // Message Validation:
                message: Yup.string()
                  .required("Message is required!")
                  .min(30, "Minimum length is 30 characters!")
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setValues(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* # Inputs Wrapper # */}
                  <div className='inputs-wrapper'>

                    {/* # Input ( Name ) */}
                    <div className='input-name mb-3'>
                      {/* ## Input ##  */}
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          name='name'
                          autoComplete='on'
                          className="form-control"
                          aria-describedby="nameHelp"
                          placeholder="Enter your name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <div className='input-icon primary-color position-absolute top-50 translate-middle-y end-0 me-2'>
                          <i className="fa-regular fa-user fa-fw"></i>
                        </div>
                      </div>
                      {/* Errors */}
                      <span className='text-danger d-block mt-2'>{errors.name && touched.name && errors.name}</span>
                    </div>

                    {/* # Input ( Phone ) */}
                    <div className='input-phone mb-3'>
                      {/* ## Input ##  */}
                      <div className="form-group position-relative">
                        <input
                          type="tel"
                          name='phone'
                          autoComplete='on'
                          className="form-control"
                          aria-describedby="phoneHelp"
                          placeholder="Phone"
                          onChange={handleChange}
                          value={values.phone}
                        />
                        <div className='input-icon primary-color position-absolute top-50 translate-middle-y end-0 me-2'>
                          <i className="fa-solid fa-phone-flip fa-fw"></i>
                        </div>
                      </div>
                    </div>

                    {/* # Input ( Email ) */}
                    <div className='input-email mb-3'>
                      {/* ## Input ##  */}
                      <div className="form-group position-relative">
                        <input
                          type="email"
                          name='email'
                          autoComplete='on'
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Email Address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <div className='input-icon primary-color position-absolute top-50 translate-middle-y end-0 me-2'>
                          <i className="fa-regular fa-envelope fa-fw"></i>
                        </div>
                      </div>
                      {/* Errors */}
                      <span className='text-danger d-block mt-2'>{errors.email && touched.email && errors.email}</span>
                    </div>

                    {/* # Text Area ( Message ) */}
                    <div className='text-area-message mb-3'>
                      <textarea
                        name='message'
                        placeholder='Message'
                        style={{ minHeight: "150px", resize: "none" }}
                        className='w-100 p-2 rounded-2 border'
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {/* Errors */}
                      <span className='text-danger d-block mt-2'>{errors.message && touched.message && errors.message}</span>
                    </div>

                  </div>
                  {/*  # Submit Button # */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className='btn-send-message btn btn-outline-danger border-primary-color primary-color rounded-pill d-block ms-auto px-4 fw-medium'
                  >
                    Send message
                  </button>
                </form>
              )}
            </Formik>
          </div>

        </div>
      </div>
    </div>
  )
};