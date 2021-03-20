import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: '',
};

const onSubmit = (values) => {
    console.log('Form errors', values);
};

// const validate = (values) => {
//     let errors = {};

//     if (!values.name) {
//         errors.name = 'Required'
//     };

//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email format'
//     };

//     if (!values.channel) {
//         errors.channel = 'Required'
//     };

//     return errors;
// };

const validationSchema = Yup.object({
    name: Yup.string().required('yup required'),
    email: Yup.string().email('yup invalid email').required('yup required'),
    channel: Yup.string().required('yup required')
})

function MainForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    console.log('Visited fields', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        {...formik.getFieldProps('name')} />
                    {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value ={formik.values.email} />
                    {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value ={formik.values.channel} />
                    {formik.errors.channel && formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default MainForm;