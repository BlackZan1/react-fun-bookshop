import { getBooksAPI } from '../dal/api.js';

const SET_FAV_BOOKS = 'SET-FAV-BOOKS';

let initialState = {
    favBooks: [],
    items: ['o37NAhf9mBMC', 'xSWOMjMSzi8C', 'n-vVCwAAQBAJ']
}

const introReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FAV_BOOKS:
            return {
                ...state,
                favBooks: [...state.favBooks, action.item]
            }
        default:
            return state;
    }
}

export const setFavBooks = (item) => ({type: SET_FAV_BOOKS, item});
export const getFavBooks = (bookId) => {
    return (dispatch) => {
        getBooksAPI(bookId)
        .then(res => {
            dispatch(setFavBooks(res.items[0].volumeInfo));
            console.log(res);
        })
    }
}



export default introReducer;