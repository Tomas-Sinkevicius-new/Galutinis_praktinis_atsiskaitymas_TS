import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function LoginForm({ onLogin }) {
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
      console.log(values);
      onLogin(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
