import styled from "styled-components";

export const ContainerFilter = styled.div`
margin-left: auto;
margin-right: auto;
width: 500px;
`;
export const Label = styled.label`
display: flex;
  flex-direction: column;
  margin-bottom: 8px;
max-width: 100%;
color: ${prop => prop.theme.colors.gray};
`;

export const FilterInput = styled.input`
padding: 8px;
width: 500px;
border:none;
border-bottom: 1px solid ${prop => prop.theme.colors.gray};
outline: 0;
background-color:  ${prop => prop.theme.colors.dark};
color: ${prop => prop.theme.colors.accent};
`;