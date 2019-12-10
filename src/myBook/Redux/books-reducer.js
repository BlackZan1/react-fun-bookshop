import { getBooksAPI } from '../dal/api.js';
import { toggleFetching } from './loader-reducer.js';

const 
    SET_BOOK_LIST = 'SET-BOOK-LIST', 
    CHANGE_PLACEHOLDER = 'CHANGE-PLACEHOLDER',
    ADD_BOOK_TO_CART = 'ADD-BOOK-TO-CART', 
    DELETE_BOOK_FROM_CART = 'DELETE-BOOK-FROM-CART', 
    SET_VALUE = 'SET-VALUE',
    TOGGLE_IS_SALED = 'TOGGLE-IS-SALED';

let initialState = {
    booksList: [],
    cartItems: [],
    value: '',
    placeholder: '',
    isSaled: false,
}

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VALUE: 
            return {
                ...state,
                value: action.value
            }
        case SET_BOOK_LIST:
            if(action.list === undefined) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    booksList: action.list,
                }
            }
        case ADD_BOOK_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.bookItem],
            }
        case DELETE_BOOK_FROM_CART:
            debugger;
            return {
                ...state,
                cartItems: state.cartItems.filter((a) => a.id !== action.bookId),
            }
        case CHANGE_PLACEHOLDER:
            return {
                ...state, 
                placeholder: action.text
            }
        case TOGGLE_IS_SALED:
            return {
                ...state,
                isSaled: action.isSaled,
            }
        default:
            return state;
    }
}

export const setBooks = (list) => ({type: SET_BOOK_LIST, list});
export const addBookToCart = (bookItem) => ({type: ADD_BOOK_TO_CART, bookItem});
export const deleteBookFromCart = (bookId) => ({type: DELETE_BOOK_FROM_CART, bookId});
export const setValue = (value) => ({type: SET_VALUE, value});
export const changePlaceholder = (text) => ({type: CHANGE_PLACEHOLDER, text});
export const toggleIsSaled = (isSaled) => ({type: TOGGLE_IS_SALED, isSaled});

export const getBooks = (value) => {
    debugger;
    return (dispatch) => {
        getBooksAPI(value)
        .then(res => {
            debugger;
            dispatch(setBooks(res.items));
            dispatch(toggleFetching(true));
        })
    }
}

export default booksReducer;