import React from 'react';
import './App.css';
import { Formik, useField, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} 
    </>
  )
}

const CustomCheckbox = ({ children, props }) => {
  const [field, meta] = useField(props, 'chekbox');

  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
        </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} 
    </>
  )
}

const CustomSelect = ({ children, props }) => {
  const [field, meta] = useField(props, 'chekbox');

  return (
    <>
      <label className='checkbox'>
        <select {...field} {...props} />
        {children}
        </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} 
    </>
  )
}

function App() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        acceptedTerms: false,
        specialPower: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the Terms and Conditions'),
        specialPower: Yup.string()
          .oneOf(['fly', 'invisibility', 'other'], 'Invalid special power')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm();
          setSubmitting(false);
        }, 3000)
      }}
    >
      {props => (
        <form>
          <h1>Sign Up</h1>
          <CustomTextInput label='Name' name='name' type='text' placeholder='Frank' />
          <CustomTextInput label='Email' name='email' type='email' placeholder='frank@hotmail.bg' />
        </form>
      )}
    </Formik>
  );
}

export default App;
