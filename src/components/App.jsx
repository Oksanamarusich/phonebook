
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import styled from "styled-components";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const Text = styled.b`
  color:  ${prop => prop.theme.colors.accent};
  font-size: 20px;

`;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
 
 useEffect(() => {
    dispatch(refreshUser());

  }, [dispatch]);

  return isRefreshing ? (
    <Text>Refreshing user...</Text>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<HomePage />} /> 
          <Route
            path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
          />
          <Route
            path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
          />
          <Route
            path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          
        </Route>
      </Routes>
  );
};








