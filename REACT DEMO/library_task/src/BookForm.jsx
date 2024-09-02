// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string()
    .required('ISBN is required')
    .matches(/^[0-9]{13}$/, 'ISBN must be exactly 13 digits'),
  publicationDate: Yup.date().required('Publication Date is required'),
});

const BookForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={BookSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <Field name="title" type="text" className="form-control" />
          <ErrorMessage name="title" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <Field name="author" type="text" className="form-control" />
          <ErrorMessage name="author" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <Field name="isbn" type="text" className="form-control" />
          <ErrorMessage name="isbn" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label className="form-label">Publication Date</label>
          <Field name="publicationDate" type="date" className="form-control" />
          <ErrorMessage name="publicationDate" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default BookForm;
