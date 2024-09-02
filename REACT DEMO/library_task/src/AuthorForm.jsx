// src/components/AuthorForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
});

const AuthorForm = ({ initialValues, onSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={AuthorSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Birth Date</label>
                    <Field name="birthDate" type="date" className="form-control" />
                    <ErrorMessage name="birthDate" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Biography</label>
                    <Field name="biography" as="textarea" className="form-control" />
                    <ErrorMessage name="biography" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
);

export default AuthorForm;
