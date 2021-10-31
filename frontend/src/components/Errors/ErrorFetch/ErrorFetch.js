import React from 'react';
import PropTypes from 'prop-types';
import './ErrorFetch.css';

function ErrorFetch(props) {
    const { error } = props;

    return (
        <div className='error-fetch'>
            {error}
            {props.children}
        </div>
    )
}

ErrorFetch.propTypes = {
    error: PropTypes.string.isRequired,
}

export default ErrorFetch;

