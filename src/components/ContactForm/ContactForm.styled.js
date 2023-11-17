import styled from "styled-components";
import {  Form,Field, ErrorMessage } from 'formik';

export const Container = styled.div`
margin: 20px auto;
padding: 40px;
width: 800px;
background-color:${prop => prop.theme.colors.dark};

`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
`;

export const Button = styled.button`
margin-top: 30px;
width:200px;
height: 40px;
 background-color: ${prop => prop.theme.colors.dark};
color:${prop => prop.theme.colors.accent};


cursor:pointer;

 &:hover{
  text-decoration: none;
 border-radius: 4px;
background-color: ${prop => prop.theme.colors.accent};
color:${prop => prop.theme.colors.dark};
}
`;

export const StyledField = styled(Field)`
padding: 8px;
max-width: 100%;
border: none;
border-bottom: 1px solid ${prop => prop.theme.colors.gray};
  outline: 0;
background-color: ${prop => prop.theme.colors.dark};
color:${prop => prop.theme.colors.accent};

  &:hover{
  
  }
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
  gap: 4px;

  max-width: 100%;
  width: 500px;
  color: ${prop => prop.theme.colors.gray};
`;

export const Error = styled(ErrorMessage)`
color: ${prop => prop.theme.colors.error};
font-style: italic;
`;