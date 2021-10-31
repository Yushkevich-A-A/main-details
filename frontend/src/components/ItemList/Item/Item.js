import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from './../../../functions/numberWithSpaces';

function Item(props) {
    const { item } = props;

    const price = numberWithSpaces(item.price);

    const handleDelete = () => {
        console.log('удаляем')
    }

    return (
        <div className='item'>
            <Link to={`/${item.id}/details`}>
                <div className="item-info">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{price} </div>
                </div>
            </Link>    
            <div className="item-actions">
                <div className="button-edit"></div>
                <div className="button-delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;

