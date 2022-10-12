

import {getInfosSolodou, getFaq} from '../../api'
import { IS_LOADING, LIST_INFOS, LIST_FAQ } from './types'

export const getInfosCms = () => (dispatch) => {
    dispatch({type: IS_LOADING})
    getInfosSolodou()
    .then((res) => {
        dispatch({type: IS_LOADING})
        
        if(res.data){
            dispatch({
                type: LIST_INFOS,
                value: res.data
            })
        }
        console.log('pages cms', res)

    })
    .catch((err) => {
        dispatch({type: IS_LOADING})
    })
}

export const getFaqs = () => (dispatch) => {
    dispatch({type: IS_LOADING})
    getFaq()
    .then((res) => {
        dispatch({type: IS_LOADING})
        if(res.data){
            dispatch({
                type: LIST_FAQ,
                value: res.data
            })
        }
        console.log('faqs cms', res)

    })
    .catch((err) => {
        dispatch({type: IS_LOADING})
    })
}