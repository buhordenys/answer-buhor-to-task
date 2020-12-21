import React from 'react';
import PropType from 'prop-types';
import "./sharedIcon.scss"
import PropTypes from "prop-types";

const propType = {
    color: PropType.string,
    children: PropType.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    className: PropType.string,
};
const defaultProps = {
    color: '',
    className: '',
};

const SharedIcon = (props) => {
    return (
        <div
            className={`${props.className} shared-icon`}
            style={{
                backgroundColor:props.color,
            }}>
            {props.children}
        </div>
    );
};

SharedIcon.propType = propType;
SharedIcon.defaultProps = defaultProps;

export default SharedIcon
