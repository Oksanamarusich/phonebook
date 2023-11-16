// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';


// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form  onSubmit={handleSubmit} autoComplete="off">
//       <label >
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };












import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operations';
import { Container, StyledForm, StyledField, Label, Button, Error } from './RegisterForm.styled'

const FormSchema = yup.object().shape({
    name: yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required'),
    email: yup.string().email()
        .required('This field is required'),
    password: yup.string()
         .min(8, 'Password is too short - should be 8 chars minimum.')
        // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
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
        console.log('formRegister', values)
        console.log('formRegister', actions)
        const payload = {
             name: values.name,
             email: values.email,
             password: values.password,
         };
      dispatch(register (payload));
     actions.resetForm();
    };
    return <Container>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <StyledForm>
                <Label>
                    Username
                    <StyledField type="text" name="name" />
                    <Error name="name" component="div" />
                </Label>
                <Label>
                    Email
                    <StyledField type="email" name="email" />
                    <Error name="email" component="div" />
                </Label>
                <Label>
                    Password
                    <StyledField type="password" name="password" />
                    <Error name="password" component="div" />
                </Label>
                <Button  type ="submit">Register</Button>
            </StyledForm>

        </Formik>
    </Container>
}









