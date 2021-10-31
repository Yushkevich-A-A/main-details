const initItem = {
    item: null,
    loading: true,
    error: null
}

const serviceFetchItemReducer = ( state = initItem, action) =>  {
    switch (action.type) {
        case 'FETCH_ITEM_REQUEST': 
            return { ...state, loading: true, error: null };
        case 'FETCH_ITEM_ERROR': 
            const { message } = action.payload;
            return { ...state, loading: false, error: message };
        case 'FETCH_ITEM_SUCCESS': 
            const { item } = action.payload;
            return { ...state, item, loading: false, error: null };
        default: 
            return { ...initItem };
    }
}

export default serviceFetchItemReducer;