import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = evt => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchWrapper}>
      
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Enter name or number..."
      />
      
    </div>
  );
};

export default SearchBox;
