import { IS_LOADING } from '../actions/types'

const intitialState = {isLoading: false}

const loadingReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case IS_LOADING:
            nextState = {
                ...state,
                isLoading: !state.isLoading
            }
            return nextState;
        default:
            return state;
    }
}

export default loadingReducer