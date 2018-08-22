import React from 'react'; // import react module
import PropTypes from 'prop-types'; // ES6
// create our Button component as a functional component
const ButtonSpecial = (props) => {
  return (
    <input
      type="button"
      className={props.direction === 'left' ? 'button btn-special-left' : 'button btn-special-right'}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

// describe our expected props types
ButtonSpecial.propTypes = {
  
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

// export our button component.
export default ButtonSpecial;
