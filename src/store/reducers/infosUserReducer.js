import { SET_INFOS_USER } from '../actions/types'

const intitialState = {infosUser: {}}

const infosUserReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case SET_INFOS_USER:
            nextState = {
                ...state,
                infosUser: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default infosUserReducer