import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonReReload from '../../components/Buttons/ButtonReReload/ButtonReReload';
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loading/Loader';
import { serviceFetchListRequest } from '../../reduxFold/actions/actions';
import './MainPages.css';

function MainPages(props) {
    const { loading, error, items } = useSelector( state => state.serviceFetchList );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(serviceFetchListRequest());
        // eslint-disable-next-line
    }, []);

    const handleReREquest = () => {
        dispatch(serviceFetchListRequest());
    }

    return (
        <div className='main-page'>
            {loading && <Loader />}
            {error && <ErrorFetch error={error}><ButtonReReload handleClick={handleReREquest}/></ErrorFetch>}
            <ItemList list={items} />
        </div>
    )
};

export default MainPages;

