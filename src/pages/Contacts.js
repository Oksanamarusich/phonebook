import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Text } from 'components/App.jsx';

export default function Contacts() {
 const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <>
            <Helmet>
        <title>Your contacts</title>
            </Helmet>
            <ContactForm />
            <Filter />
             <Text>{isLoading && 'Request in progress...'}</Text>
            <ContactList/>
        </>
    )
}