import React from 'react';
import * as Yup from 'yup';
import {Formik, Field, ErrorMessage, Form} from 'formik';
import TextError from '../TextError/TextError';

const checkboxOptions = [
    {key: 'facebook', value: 'Facebook'},
    {key: 'twitter', value: 'Twitter'},
    {key: 'instagram', value: 'Instagram'},
]

const initialValues = {
    name: '',
    email: '',
    social: [],
};

const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
    name: Yup.string().required('required name'),
    email: Yup.string().email('invalid email').required('required field'),
    social: Yup.array(),
});

function TestForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field 
                        id='name' 
                        type='text' 
                        name='name'
                        placeholder='Your Name'/>
                        <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field 
                        id='email' 
                        type='email' 
                        name='email'
                        placeholder='Enter Email'/>  
                        <ErrorMessage name='email' component={TextError} />
                </div>

                <div id="checkbox-group">Choose your social media</div>
                <div role="group" aria-labelledby="checkbox-group">
                    {checkboxOptions.map(option => {
                        return (
                            <label>
                                <Field type='checkbox' name={option.key} value={option.value} />
                                {option.value}
                            </label>
                        )
                    })}
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default TestForm