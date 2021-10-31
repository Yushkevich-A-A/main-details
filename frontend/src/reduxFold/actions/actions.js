export const serviceFetchListRequest = () => {
    return { type: 'SERVICE_FETCH_REQUEST' }
}

export const serviceFetchListError = (message) => {
    return { type: 'SERVICE_FETCH_ERROR', payload: { message } }
}

export const serviceFetchListSuccess = (items) => {
    return { type: 'SERVICE_FETCH_SUCCESS', payload: { items } }
}

export const fetchItemRequest = (id) => {
    return { type: 'FETCH_ITEM_REQUEST', payload: {id} }
}

export const fetchItemError = (message) => {
    return { type: 'FETCH_ITEM_ERROR', payload: { message } }
}

export const fetchItemSuccess = (item) => {
    return { type: 'FETCH_ITEM_SUCCESS', payload: { item } }
}