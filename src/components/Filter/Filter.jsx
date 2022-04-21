import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { ItemsSlice } from '../../redux/items';
import { ItemsSelectors } from '../../redux/items';
import { LabelFilterStyle, InputFilterStyle } from './Filter.styled';

const generateId = nanoid();

const Filter = () => {
  const value = useSelector(ItemsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <LabelFilterStyle htmlFor={generateId}>
      Find contacts by name
      <InputFilterStyle
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={e => dispatch(ItemsSlice.changeFilter(e.target.value))}
        id={generateId}
      />
    </LabelFilterStyle>
  );
};

export default Filter;
