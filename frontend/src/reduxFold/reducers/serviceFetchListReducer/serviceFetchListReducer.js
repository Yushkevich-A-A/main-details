const initState = {
    items: [],
    loading: false,
    error: null,
}

const serviceFetchListReducer = ( state = initState, action) =>  {
    switch (action.type) {
        case 'SERVICE_FETCH_REQUEST': 
            return { ...state, loading: true, error: null };
        case 'SERVICE_FETCH_ERROR': 
            const { message } = action.payload;
            return { ...state, loading: false, error: message };
        case 'SERVICE_FETCH_SUCCESS': 
            const { items } = action.payload;
            return { ...state, items, loading: false, error: null };
        default: 
            return { ...initState };
    }
}

export default serviceFetchListReducer;