import styled from 'styled-components';

export const Container = styled.div`
display: flex;
`;

export const Text = styled.p`
margin-right: 20px;
font-size: 20px;
color:${prop => prop.theme.colors.accent};
`;

export const Button = styled.button`
color:${prop => prop.theme.color.light};
background-color:${prop => prop.theme.colors.dark};
`;