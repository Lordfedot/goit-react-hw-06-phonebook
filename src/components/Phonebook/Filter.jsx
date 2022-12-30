import { useDispatch } from 'react-redux';
import { Input } from './Styled/Filter.styled';

import { value } from 'components/redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = e => {
    const input = e.target.value;
    dispatch(value(input));
  };
  return (
    <label>
      Find contacts by name
      <Input onChange={filterValue} type="text" name="filter" />
    </label>
  );
};

export default Filter;
