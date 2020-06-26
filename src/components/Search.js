import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector(({value}) => value);

  const handleOnChange = ({ target: { value } }) => {
    dispatch({
      type: 'SEARCH_QUERY_CHANGE',
      value
    })
  };

  return (
    <>
      search:
      <input type="text" placeholder="type here..." value={value} onChange={handleOnChange} />
    </>
  )
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
