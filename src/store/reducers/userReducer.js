import { SET_USER, SET_INFOS_USER, MEMORY_USER } from '../actions/types'

const intitialState = {user:{}, infosUser: {}, memoryUser: {}}

const userReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case SET_USER:
            nextState = {
                ...state,
                user: action.value
            }
            return nextState;
        case SET_INFOS_USER:
            nextState = {
                ...state,
                infosUser: action.value
            }
            return nextState;
        case MEMORY_USER:
            nextState = {
                ...state,
                memoryUser: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default userReducer