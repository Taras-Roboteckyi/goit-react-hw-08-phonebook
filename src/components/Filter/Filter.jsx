import { nanoid } from 'nanoid';

import { LabelFilterStyle, InputFilterStyle } from './Filter.styled';

const generateId = nanoid();

const Filter = ({ value, onChange }) => {
  return (
    <LabelFilterStyle htmlFor={generateId}>
      Find contacts by name
      <InputFilterStyle
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={onChange}
        id={generateId}
      />
    </LabelFilterStyle>
  );
};

export default Filter;
