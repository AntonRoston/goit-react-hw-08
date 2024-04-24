import DocumentTitle from '../components/DocumentTitle';

import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const styles = {
  container: {
    paddingTop: '200px',
    paddingRight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  
};

export default function Register() {
    const dispatch = useDispatch();

    const onRegister = (formData) => {
        dispatch(register(formData));
    }

  return (
    <div style={styles.container}>
      <DocumentTitle>Registration</DocumentTitle>
          <RegistrationForm onRegister={ onRegister} />
    </div>
  );
}
