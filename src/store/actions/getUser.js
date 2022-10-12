import {getUser } from '../../api'
import { get_lesson_level } from '../actions/lesson'
import { SET_INFOS_USER } from './types'

export const get_infos_user = (idUser, token) => (dispatch) => {
    getUser(idUser, token)
    .then((res) => {
        if(res.data) {
            dispatch({
                type: SET_INFOS_USER,
                value: res.data
            })
            dispatch(get_lesson_level(res.data.course_level))
        }
    })
    .catch((err) => {
        console.log('err get user', err)
    })
}