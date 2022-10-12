import { LIST_INFOS, LIST_FAQ } from '../actions/types'

const intitialState = {pages: [], faqs: []}

const cmsReducer = (state = intitialState, action) => {
    let nextState;
    switch (action.type) {
        case LIST_INFOS:
            nextState = {
                ...state,
                pages: action.value
            }
            return nextState;
        case LIST_FAQ:
            nextState = {
                ...state,
                faqs: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default cmsReducer