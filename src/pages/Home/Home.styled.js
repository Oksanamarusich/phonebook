import styled from "styled-components";

export const Container = styled.div`
padding:100px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${prop => prop.theme.colors.dark};
//border: 1px solid ${prop => prop.theme.colors.gray};
`;

export const Title = styled.h1`
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    
    font-size: 58px;
    line-height: 1.16;
    text-transform: uppercase;
    color:${prop => prop.theme.colors.accent};
`;

export const Description = styled.div`
display: flex;
flex-direction: column;

`;

export const Text = styled.p`
margin-bottom: 8px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.16;
    color:${prop => prop.theme.colors.accent};
`;