import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';


export const UserMenu = () => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
          <p className={css.username}>Welcome, { user.name}</p>
      <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
