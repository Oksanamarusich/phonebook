import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
    return (
        <>
            <Helmet>
        <title>Your contacts</title>
            </Helmet>
            <ContactForm />
            <Filter />
            <ContactList/>
        </>
    )
}