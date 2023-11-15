import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operations';

const FormSchema = yup.object().shape({
    name: yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required'),
    email: yup.string().email()
        .required('This field is required'),
    password: yup.string()
         .min(4, 'Password is too short - should be 4 chars minimum.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('This field is required'),
  
 });

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, actions) => {
        console.log(values)
        console.log(actions)
        const payload = {
             name: values.name,
             email: values.email,
             password: values.password,
         };
      dispatch(register (payload));
     actions.resetForm();
    };
    return <div>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <Form>
                <label>
                    Username
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Email
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </label>
                <button type ="submit">Register</button>
            </Form>

        </Formik>
    </div>
}









// import { useDispatch } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { register } from 'redux/auth/operations';


// const FormSchema = yup.object().shape({
//     name: yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('This field is required'),
//     email: yup.string().email()
//         .required('This field is required'),
//     pssword: yup.string()
//          .min(4, 'Password is too short - should be 4 chars minimum.')
//          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
//         .required('This field is required'),
  
//  });

// export const RegisterForm = () => {
//     const dispatch = useDispatch();
//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//     };

//      const handleSubmit = (values, actions) => {
//         console.log(values);
//         console.log(actions)
//          const payload = {
//              name: values.name,
//              email: values.email,
//              password: values.password,
//          };
//         dispatch(register(payload));
//         actions.resetForm();
//     };
    
//     return <div>
//         <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//              validationSchema={FormSchema}>
                
//            <Form>
//                 <label>
//                     Username
//                     <Field type="text" name="name" />
//                     <ErrorMessage name="name" component="div" />
//                 </label>
//                 <label>
//                 Email
//                     <Field type="email" name="email" />
//                     <ErrorMessage name="email" component="div" />
//             </label>
//             <label>
//                 Password
//                     <Field type="password" name="password" />
//                     <ErrorMessage name="password" component="div" />
//             </label>
//                 <button type="submit"> Register </button>
//             </Form>
//         </Formik>
//     </div>
// };