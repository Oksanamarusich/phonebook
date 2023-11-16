import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
padding: 80px 40px;
margin: 40px auto;
width: 400px;
height: 500px;
background-color:${prop => prop.theme.colors.light}; 
border-radius: 4px;
`;

export const StyledForm = styled(Form)`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`; 

export const Label = styled.label`
display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;
  color: ${prop => prop.theme.colors.dark};
`;

export const StyledField = styled(Field)`
padding: 8px;
max-width: 100%;

border: 1px solid ${prop => prop.theme.colors.gray};
  outline: 0;
  border-radius: 4px;
`;

export const Button = styled.button`
margin-top: 30px;
width:180px;
height: 40px;
border-radius: 4px;
border: 1px solid ${prop => prop.theme.colors.dark};
background-color: ${prop => prop.theme.colors.dark};
color:${prop => prop.theme.colors.light};
cursor:pointer;

 &:hover{
  text-decoration: none;
  border: 1px solid ${prop => prop.theme.colors.accent};
background-color: ${prop => prop.theme.colors.accent};
color:${prop => prop.theme.colors.light};
}
`;
export const Error = styled(ErrorMessage)`
color: ${prop => prop.theme.colors.error};
font-style: italic;
`;
