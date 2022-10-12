import { SET_MESSAGE_ERROR, SET_ERROR_CONNECT } from '../actions/types'

const intitialState = {errorMessage: '', errConnect: ''}

const messageReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case SET_MESSAGE_ERROR:
            nextState = {
                ...state,
                errorMessage: action.value
            }
            return nextState;
        case SET_ERROR_CONNECT:
            nextState = {
                ...state,
                errConnect: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default messageReducer