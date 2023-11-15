
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
//import { fetchContacts } from 'redux/contacts/operations';
//import { selectIsLoading, selectError } from 'redux/contacts/selectors';
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Loader } from './Loader/Loader';
// import { ErrorMessage } from './ErrorMessage';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());

  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<HomePage />} /> 
          <Route
            path="/register"
            // element = {<RegisterPage />}
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
          />
          <Route
            path="/login"
            // element = {<LoginPage />}
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
          />
          <Route
            path="/contacts"
            element = {<ContactsPage />}
          // element={
          //   <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          // }
        />
          
        </Route>
      </Routes>
  );
};

//   return (<div>
//      <h1>Phonebook</h1>
//     <ContactForm />
//     {error && (<ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>)}  
//     <h2>Contacts</h2>
//     <Filter />
//     {isLoading && !error && <Loader />} 
//     <ContactList />
//   </div>
//   );
// };






