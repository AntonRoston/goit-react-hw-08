import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import DocumentTitle from "../components/DocumentTitle";
// import Loader from "../components/Loader/Loader";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import Loader from "../components/Loader/Loader";

const styles = {
  container: {
    height: '100vh',
    paddingTop: '110px',
    paddingRight: '40px',
    paddingLeft: '40px',
    backgroundColor: '#ad70e5',
    },
    formWrap: {
        display: 'flex',
        marginBottom: '50px',
    }
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <DocumentTitle>Phonebook</DocumentTitle>
      <div style={styles.formWrap}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && !error && <Loader />}
      {error && (
        <b>
          Something wrong, please try again
          later
        </b>
      )}
      <ContactList />
    </div>
  );
}
