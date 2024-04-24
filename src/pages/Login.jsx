import DocumentTitle from '../components/DocumentTitle';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import LoginForm from '../components/LoginForm/LoginForm';

const styles = {
  container: {
    paddingTop: '200px',
    paddingRight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

export default function Login() {
  const dispatch = useDispatch();

  const onLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <div style={styles.container}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
