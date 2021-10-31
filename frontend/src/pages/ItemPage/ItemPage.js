import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonReReload from '../../components/Buttons/ButtonReReload/ButtonReReload';
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch';
import FullVisionItem from '../../components/FullVisionItem/FullVisionItem';
import Loader from '../../components/Loading/Loader';
import { fetchItemRequest } from '../../reduxFold/actions/actions';
import './ItemPage.css';

function ItemPage(props) {
    const { match } = props;
    const { item, loading, error } = useSelector( state => state.serviceFetchItem);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchItemRequest(match.params.id));
        // eslint-disable-next-line
    }, []);

    const handleReREquest = () => {
        dispatch(fetchItemRequest(match.params.id));
    }


    return (
        <div className='item-page'>
            {loading && <Loader />}
            {error && <ErrorFetch error={error}><ButtonReReload handleClick={handleReREquest}/></ErrorFetch>}
            {item && <FullVisionItem item={item}/>}
        </div>
    )
}

export default ItemPage

