import React from 'react';
import PropTypes from 'prop-types';
import './FullVisionItem.css';

function FullVisionItem(props) {
    const { item } = props;
    
    return (
        <div className='full-vision-item'>
            <div className="vision-item-name">Название: {item.name}</div>
            <div className="vision-item-name">Описание: {item.content}</div>
            <div className="vision-item-name">Цена: {item.price}</div>
        </div>
    )
}

FullVisionItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FullVisionItem

