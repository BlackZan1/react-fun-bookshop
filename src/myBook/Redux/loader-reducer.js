let initialState = {
    isFetching: false,
}

const loaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE-FETCHING':
            return {
                ...state,
                isFetching: action.isFetch,
            }
        default:
            return state;
    }
}

export const toggleFetching = (isFetch) => ({type: 'TOGGLE-FETCHING', isFetch});

export default loaderReducer;