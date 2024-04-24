import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(addContact(data));
    actions.resetForm();
  };

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: yup
      .string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <div className={css.infoWrap}>
            <label className={css.label}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Tom Davis "
            ></Field>
            <span className={css.errorMessage}>
              <ErrorMessage name="name" as="span" />
            </span>
          </div>
          <div className={css.infoWrap}>
            <label className={css.label}>Number</label>
            <Field
              className={css.field}
              type="text"
              name="number"
              placeholder="123-45-67"
            ></Field>
            <span className={css.errorMessage}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>

          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <div className={css.imgWrap}></div>
    </div>
  );
};

export default ContactForm;
