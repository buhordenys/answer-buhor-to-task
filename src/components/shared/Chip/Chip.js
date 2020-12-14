import React from 'react';
import PropTypes from 'prop-types';
import './chip.scss';

const propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  color: 'black',
  backgroundColor: 'grey',
  className: '',
  onClick: () => {},
}

const Chip = (props) => {
  return (
      <div
          className={`${props.className} chip`}
          onClick={props.onClick}
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color,
          }}
      >
        {
          props.children
        }
      </div>
  )
};
Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;