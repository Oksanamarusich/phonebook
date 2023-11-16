import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.dark};
`;


export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};