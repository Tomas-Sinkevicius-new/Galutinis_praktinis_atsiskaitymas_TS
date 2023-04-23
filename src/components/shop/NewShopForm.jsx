import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

function NewShopForm({ onNewShop }) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      shopName: Yup.string()
        .min(4, 'Mažiausiai 4 simboliai')
        .required('Privalomas laukas'),
      town: Yup.string()
        .min(4, 'Mažiausiai 4 simboliai')
        .required('Privalomas laukas'),
      startYear: Yup.number()
        .min(1970, 'Mažiausiai 1970 metai')
        .max(2022, 'Maksimali reikšmė - 2022 metai')
        .required('Privalomas laukas')
        .typeError('Privalo būti skaičius')
        //padarom kad tikrai būtų laukas lygus 4 simboliams
        .test(
          'len',
          'Turi būti 4 skaitmenys',
          (val) => val.toString().length === 4
        ),
      description: Yup.string()
        .min(6, 'Mažiausiai 6 simboliai')
        .required('Privalomas laukas'),
      imageUrl: Yup.string()
        .min(5, 'Mažiausiai 5 simboliai')
        .required('Privalomas laukas'),
    }),
    onSubmit: (values) => {
      console.log(values);
      onNewShop(values);
    },
  });
  return (
    <div className='form'>
      <h2 className='h2'>Add Shop:</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className='label' htmlFor='shopName'>
            Name:
          </label>
          <input
            className='input'
            type='text'
            name='shopName'
            value={formik.values.shopName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.shopName && formik.errors.shopName ? (
            <div className='error'>{formik.errors.shopName}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <div>
          <label className='label' htmlFor='town'>
            Town:
          </label>
          <input
            className='input'
            type='text'
            name='town'
            value={formik.values.town}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.town && formik.errors.town ? (
            <div className='error'>{formik.errors.town}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <div>
          <label className='label' htmlFor='startYear'>
            Start Year:
          </label>
          <input
            className='input'
            type='number'
            name='startYear'
            value={formik.values.startYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.startYear && formik.errors.startYear ? (
            <div className='error'>{formik.errors.startYear}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <div>
          <label className='label' htmlFor='description'>
            Description:
          </label>
          <textarea
            className='input'
            type='textarea'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className='error'>{formik.errors.description}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <div>
          <label className='label' htmlFor='imageUrl'>
            Image URL:
          </label>
          <input
            className='input'
            type='text'
            name='imageUrl'
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className='error'>{formik.errors.imageUrl}</div>
          ) : (
            <div className='invisible'> invisible</div>
          )}
        </div>
        <button className='btnForm' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}

NewShopForm.propTypes = {
  onNewShop: PropTypes.func.isRequired,
};

export default NewShopForm;
