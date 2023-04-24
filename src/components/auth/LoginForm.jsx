import { useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import './loginFormRegister.scss';
import PropTypes from 'prop-types';

function LoginForm({ onLogin, onLoginWithGoogle }) {
  const formik = useFormik({
    initialValues: {
      email: 'test@test.lt',
      password: '123456',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('required'),
      password: Yup.string()
        .min(6, 'Password mus be at least 6characters')
        .required('required'),
    }),
    onSubmit: (values) => {
      // console.log(values);
      onLogin(values);
    },
  });
  return (
    <div className='form'>
      <h2 className='h2'>Sign In</h2>
      <div className='social'>
        <div>
          <button onClick={onLoginWithGoogle} className='google'>
            <i className='fa fa-google' aria-hidden='true'></i> Google
          </button>
        </div>
      </div>

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
          Sign in
        </button>
        <p className='register'>
          Still not register? <NavLink to={'/register'}>Clike here</NavLink>{' '}
        </p>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLoginWithGoogle: PropTypes.func.isRequired,
};

export default LoginForm;
