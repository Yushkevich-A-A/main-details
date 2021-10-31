import React from 'react';
import PropTypes from 'prop-types';
import './ButtonReReload.css';

function ButtonReReload(props) {
    const { handleClick } = props;

    return (
        <div className='button-re-reload' onClick={handleClick}>
            Повторить запрос
        </div>
    )
}

ButtonReReload.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default ButtonReReload

