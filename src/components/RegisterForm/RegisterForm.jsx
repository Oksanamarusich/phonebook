import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';


const FormSchema = Yup.object().shape({
   username:  Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required'),
//    number: Yup.string()
//      .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 000-00-00!")
//      .required('This field is required'),
  
 });

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const onSubmitForm = (values, actions) => {
        const payload = {
            username: values.name,
            email: values.email,
            password: values.password,
        };
        console.log(payload);
    
        dispatch(register(payload));
        actions.resetForm();
    };
    
    return <div>
        <Formik initialValues={{
            username: '',
            email: '',
            password: '',
      
        }}
            validationSchema={FormSchema}
            onSubmit={onSubmitForm}>
            <Form>
                <label>
                    Username
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Email
                    <Field type="email" name="email" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <button type="submit"> Register </button>
            </Form>
        </Formik>
    </div>
};