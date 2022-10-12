import { TOGGLEVIDEODEMO } from '../actions/types'

const intitialState = {isVisibleTeaser: false}

const videoDemoReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case TOGGLEVIDEODEMO:
            nextState = {
                ...state,
                isVisibleTeaser: !state.isVisibleTeaser
            }
            return nextState;
        default:
            return state;
    }
}

export default videoDemoReducer