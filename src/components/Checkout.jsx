import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Checkout() {
    

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiration: '',
      cvv: '',
      name: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required('Card number is required'),
      expiration: Yup.date().required('Expiration date is required'),
      cvv: Yup.string().required('CVV is required'),
      name: Yup.string().required('Cardholder name is required'),
    }),
    onSubmit: ()=>{
      swal("Payment Successful!", "This is dummy payment gateway!", "success")
      formik.resetForm()
    } ,
  });

  return (
    <div className="pt-8 w-full dark:bg-gray-900">
      <div className="w-full px-3 lg:w-1/2 mx-auto h-[87vh]">
        <h1 className="dark:text-white text-gray-800 text-3xl font-bold mb-4">Payment Form</h1>


        <form
          className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              className={`p-2 w-full border ${
                formik.touched.cardNumber && formik.errors.cardNumber
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } rounded-md`}
              placeholder="Enter card number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cardNumber}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.cardNumber}</p>
            ) : null}
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiration" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                Expiration Date
              </label>
              <input
                type="month"
                id="expiration"
                name="expiration"
                className={`p-2 w-full border ${
                  formik.touched.expiration && formik.errors.expiration
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-md`}
                placeholder="MM/YY"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.expiration}
              />
              {formik.touched.expiration && formik.errors.expiration ? (
                <p className="text-red-500 text-sm mt-1">{formik.errors.expiration}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="cvv" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className={`p-2 w-full border ${
                  formik.touched.cvv && formik.errors.cvv ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } rounded-md`}
                placeholder="CVV"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvv}
              />
              {formik.touched.cvv && formik.errors.cvv ? (
                <p className="text-red-500 text-sm mt-1">{formik.errors.cvv}</p>
              ) : null}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`p-2 w-full border ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md`}
              placeholder="Enter cardholder name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Pay Now
            </button>


          </div>
        </form>
      </div>
    </div>
  );
}
