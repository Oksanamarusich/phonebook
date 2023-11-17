import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${prop => prop.theme.colors.dark};
`;

export const Title = styled.h1`
    margin-bottom: 30px;
    
    font-size: 38px;
    line-height: 1.16;
    text-transform: uppercase;
    color:${prop => prop.theme.colors.accent};
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
margin-left: 115px;
`;

export const Text = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.16;
    color:${prop => prop.theme.colors.accent};
`;