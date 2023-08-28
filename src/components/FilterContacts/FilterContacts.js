import { Filter } from './FilterContacts.styled';
import PropTypes from 'prop-types';

export const FilterContacts = ({ filter, handleChangeFilter }) => {
  return (
    <Filter>
      Find contact by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleChangeFilter}
        required
      />
    </Filter>
  );
};

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
