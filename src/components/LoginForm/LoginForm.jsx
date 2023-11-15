import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/operations';

const FormSchema = yup.object().shape({
    email: yup.string()
          .email()
          .required('This field is required'),
    password: yup.string()
         .min(4, 'Password is too short - should be 4 chars minimum.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('This field is required'),
  
 });

export const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: '',
    };
    
    const handleSubmit = (values, actions) => {
        console.log(values);
        console.log(actions)
        const payload = {
             email: values.email,
             password: values.password,
         };
        dispatch(logIn(payload));
        actions.resetForm();
    };

    return <div>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
             validationSchema={FormSchema}>
            <Form autoComplete= "off">
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
            <button type ="submit">Log In</button>
            </Form>
            
        </Formik>
    </div>
}







// import { useDispatch } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { logIn } from 'redux/auth/operations';


// const FormSchema = Yup.object().shape({
    
//     email: Yup.string().email()
//         .required('This field is required'),
//     pssword: Yup.string()
//          .min(8, 'Password is too short - should be 8 chars minimum.')
//          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
//         .required('This field is required'),
  
//  });

// export const LoginForm = () => {
//     const dispatch = useDispatch();

//     const onSubmitForm = (values, actions) => {
//         const payload = {
            
//             email: values.email,
//             password: values.password,
//         };
//         console.log(payload);
    
//         dispatch(logIn(payload));
//         actions.resetForm();
//     };
    
//     return <div>
//         <Formik
//             initialValues={{
            
//             email: '',
//             password: '',
      
//         }}
//             validationSchema={FormSchema}
//             onSubmit={onSubmitForm}>
//             <Form>
               
//                 <label>
//                     Email
//                     <Field type="email" name="email" />
//                     <ErrorMessage name="name" component="div" />
//                 </label>
//                 <label>
//                     Password
//                     <Field type="password" name="password" />
//                     <ErrorMessage name="name" component="div" />
//                 </label>
//                 <button type="submit"> Log In </button>
//             </Form>
//         </Formik>
//     </div>
// };