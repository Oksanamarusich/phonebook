import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/operations';
import { Container, StyledForm, StyledField, Label, Button, Error } from './LoginForm.styled';

const FormSchema = yup.object().shape({
    email: yup.string()
          .email()
          .required('This field is required'),
    password: yup.string()
         .min(8, 'Password is too short - should be 8 chars minimum.')
        //  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('This field is required'),
  
 });

export const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: '',
    
    };
    
    const handleSubmit = (values, actions) => {
        const payload = {
            email: values.email,
            password: values.password,
        };
        dispatch(logIn(payload));
        actions.resetForm();
    };

    return <Container>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <StyledForm autoComplete="off">
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
                   <Button  type="submit">Log In</Button>
            </StyledForm>
        </Formik>
         
    </Container>
};







