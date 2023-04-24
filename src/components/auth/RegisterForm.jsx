import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './loginFormRegister.scss';
import PropTypes from 'prop-types';

function RegisterForm({ onRegister }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('required'),
      password: Yup.string()
        .min(6, 'Password mus be at least 6characters')
        .required('required'),
    }),
    onSubmit: (values) => {
      onRegister(values);
    },
  });

  return (
    <div className='form'>
      <h2 className='h2'>Register:</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className='label' htmlFor='email'>
            Email:
          </label>
          <input
            className='input'
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <div>
          <label className='label' htmlFor='password'>
            Password:
          </label>
          <input
            className='input'
            type='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <button className='btnForm' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
