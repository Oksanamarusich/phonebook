import styled from "styled-components";

export const Container = styled.div`
margin:50px auto;
padding: 30px 200px 80px 500px;
background-color:${prop => prop.theme.colors.dark};
`;

export const Title = styled.h1`
    margin-bottom: 30px;
    
    font-size: 38px;
    line-height: 1.16;
    text-transform: uppercase;
    color:${prop => prop.theme.colors.accent};
`;

export const Text = styled.p`
    //margin-left: 100px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.16;
    
    color:${prop => prop.theme.colors.accent};
`;