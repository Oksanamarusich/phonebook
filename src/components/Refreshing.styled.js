import styled from "styled-components";

export const Text = styled.b`
  color:  ${prop => prop.theme.colors.accent};
  font-size: 20px;

`;

export const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;