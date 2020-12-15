import React from 'react';
import PropType from 'prop-types';
import "./sharedIcon.scss"
import PropTypes from "prop-types";

const propType = {
    color: PropType.string,
    size: PropType.string,
    children: PropType.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
const defaultProps = {
    color: '',
    size: '',
};

const SharedIcon = (props) => {
    return (
        <div
            className="shared-icon"
            style={{
                backgroundColor:props.color,
                width:props.size,
                height:props.size
            }}>
            {props.children}
        </div>
    );
};

SharedIcon.propType = propType;
SharedIcon.defaultProps = defaultProps;

export default SharedIcon
