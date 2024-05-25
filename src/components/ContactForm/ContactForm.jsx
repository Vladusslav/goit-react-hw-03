import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
/*import { AiOutlineUserAdd } from "react-icons/ai";*/
import * as yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    console.log(values);
    actions.resetForm();
  };

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  // const contactSchema = object({})

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            placeholder="Tom Davis "
          ></Field>
          <span className={css.errorMessage}>
            <ErrorMessage name="name" as="span" />
          </span>

          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberId}
            placeholder="123-45-67"
          ></Field>
          <span className={css.errorMessage}>
            <ErrorMessage name="number" as="span" />
          </span>

          <button className={css.addBtn} type="submit">
            Add contact   <AiOutlineUserAdd size={"20"} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;