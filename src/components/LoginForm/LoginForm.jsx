import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!'),
});

const INITIAL_FORM_DATA = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(logIn(formData));
  }
  
  
  const handleSubmit = (data, formActions) => {
    onLogin(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Login</h2>

        <label className={css.label}>Email</label>
        <Field
          className={css.field}
          placeholder="alex@patron.com"
          type="text"
          name="email"
        />
        <span className={css.errorMessage}>
          <ErrorMessage name="email" as="span" />
        </span>

        <label className={css.label}>Password:</label>
        <Field
          className={css.field}
          placeholder="Enter your password"
          type="password"
          name="password"
        />
        <span className={css.errorMessage}>
          <ErrorMessage name="password" as="span" />
        </span>

        <button
          className={css.signInBtn}
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Sign In 😜
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
