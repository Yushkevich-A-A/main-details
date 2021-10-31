import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, switchMap, catchError  } from 'rxjs/operators';
import { fetchItemError, fetchItemSuccess, serviceFetchListError, serviceFetchListSuccess } from '../actions/actions';


export const epicFetchList = action$ => action$.pipe(
    ofType('SERVICE_FETCH_REQUEST'),
    switchMap( o => ajax.getJSON(`${process.env.REACT_APP_CURRENT_URL}/api/services`).pipe(
            map( o => serviceFetchListSuccess(o)),
            catchError( o => of(serviceFetchListError(o.message)))
        )
    )
) 

export const epicFetchItem = action$ => action$.pipe(
    ofType('FETCH_ITEM_REQUEST'),
    map( o => o.payload.id),
    filter( o => o !== ''),
    switchMap( o => ajax.getJSON(`${process.env.REACT_APP_CURRENT_URL}/api/services/${o}`).pipe(
            map( o => fetchItemSuccess(o)),
            catchError( o => of(fetchItemError(o.message)))
        )
    )
) 