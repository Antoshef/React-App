import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError/TextError';

const initialValues = {
    name: '',
    email: '',
    phoneNumbers: [''],
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: '',
    }
};

const onSubmit = (values) => {
    console.log(values)
};

const validationSchema = Yup.object({
    name: Yup.string().required('yup required'),
    email: Yup.string().required('yup required'),
    address: Yup.string().required('Required!!!'),
});

const validateEmail = (values) => {
    let error;
    const reg = /^[\w]{2,}@[\w]{3,}.[\w]{2,}/g;
    if (!reg.test(values)) {
        error = 'Invalid Email address'
    } 
    return error;
}

function ReformedForm() {
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnChange={false}
            validateOnMount
            >
            {formik => {
                console.log(formik);
                return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor='name'>Name</label>
                                <Field 
                                    type='text' 
                                    id='name' 
                                    name='name'
                                    placeholder='Type your Name' />
                                <ErrorMessage name='name' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='email'>Email</label>
                                <Field 
                                    type='email' 
                                    id='email' 
                                    name='email'
                                    placeholder='Enter Email'
                                    validate={validateEmail} />
                                <ErrorMessage name='email' component={TextError}/>

                            </div>

                            <div className='form-control'>
                                <label htmlFor='comments'>Comments</label>
                                <Field 
                                    as='textarea'
                                    type='text' 
                                    id='comments' 
                                    name='comments' 
                                    placeholder='Enter Comments...'/>
                                <ErrorMessage name='comments' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='address'>Address</label>
                                <FastField name='address'>
                                    {
                                        props => {
                                            const { field, form, meta } = props;
                                            console.log('Field render');
                                            return (
                                                <div>
                                                    <input type='text' id='address' {...field} />
                                                    {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null } */}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                                <ErrorMessage name='address' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='facebook'>Facebook profile</label>
                                <Field type='text' id='facebook' name='social.facebook' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='twitter'>Twitter profile</label>
                                <Field type='text' id='twitter' name='social.twitter' />
                            </div>

                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                            <button type='reset'>Reset</button>
                        </Form>
                )
            }}
            
        </Formik>
    );
};

export default ReformedForm;