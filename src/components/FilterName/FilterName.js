import { ListItem, List } from './FilterName.styled';
import PropTypes from 'prop-types';

export const FilterName = ({ filtername = {} }) => {
  return (
    <List>
      <ListItem key={filtername.id}>
        {filtername.name}: {filtername.number}
      </ListItem>
    </List>
  );
};

FilterName.propTypes = {
  filtername: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
