import { UPDATE_LEVEL, SET_LESSON, SET_JEUX, SET_LEVEL } from '../actions/types'

const intitialState = {levelSelected: 1,level:[], lesson: {}, jeux: {}}

const lessonReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case UPDATE_LEVEL:
            nextState = {
                ...state,
                level: action.value
            }
            return nextState;
        case SET_LESSON:
            nextState = {
                ...state,
                lesson: action.value
            }
            return nextState;
        case SET_LEVEL:
            nextState = {
                ...state,
                levelSelected: action.value
            }
            return nextState;
        case SET_JEUX:
            nextState = {
                ...state,
                jeux: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default lessonReducer