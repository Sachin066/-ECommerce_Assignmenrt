import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../context/UserContext';
import { REACT_APP_USERS_API } from '../utils';

export default function Login() {
  const { login, setAllUsers } = useContext(userContext);
  const navigate = useNavigate();

  // set the all users data to the context provided by api
  useEffect(() => {
    const fetchData = () => {
      fetch(REACT_APP_USERS_API)
        .then((res) => res.json())
        .then((result) => {
          console.log('all users', result);
          setAllUsers(result);
        });
    };

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      
        login(values);
      setTimeout(() => {
        formik.resetForm();
        navigate('/');
      }, 1000);
    
      
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    }),
  });

  return (
    <div className=' h-[92vh] dark:bg-gray-900 pt-10'>
      
    <div className="mx-auto max-w-md p-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-md">
      <h1 className="font-bold text-2xl mb-4">Login Page</h1>

      <form onSubmit={formik.handleSubmit}>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="mt-1 p-2 w-full rounded-md dark:bg-gray-700 dark:text-white"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full rounded-md dark:bg-gray-700 dark:text-white"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          ) : null}
        </div>

        <div>
          <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-2xl"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
    
      
    </div>
  );
}
