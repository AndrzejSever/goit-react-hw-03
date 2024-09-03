import { Formik, Form, Field,ErrorMessage  } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
 name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
 number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

export default function ContactForm({ onSubmit ,}) {
 return (
  <Formik
   initialValues={{
    name: "",
    number: "",
         }}
         
   validationSchema={SignupSchema}
   onSubmit={onSubmit}
  >
   <Form className={css.form}>
    <div>
     <label htmlFor="">Name</label>
     <Field type="text" name="name" />
     <ErrorMessage name="name" />
    </div>
    <div>
     <label htmlFor="">Number</label>
     <Field type="tel" name="number" />
     <ErrorMessage name="number" />
    </div>
    <button type="submit" >Add contact</button>
   </Form>
  </Formik>
 );
}
