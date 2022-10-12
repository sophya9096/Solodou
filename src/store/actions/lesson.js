import {getLessonsLevel, getSingleLesson, assimilated_lesson, get_game} from '../../api'
import { UPDATE_LEVEL, SET_LESSON, SET_JEUX } from './types'
import { store } from '../configurestore'
import { get_infos_user } from './getUser'

export const get_lesson_level = (level) => (dispatch) => {
    getLessonsLevel(level)
    .then((res) => {
        if(res.data) {
            dispatch({
                type: UPDATE_LEVEL,
                value: res.data
            })
        }
    })
    .catch((err) => {
        console.log('err get level', err)
    })
}

export const getLesson = (idLesson, token) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getSingleLesson(idLesson, token)
        .then((res) => {
            resolve(res)
            if(res.data) {
                dispatch({
                    type: SET_LESSON,
                    value: res.data
                })
            }
        })
        .catch((err) => {
            reject(err)
            console.log('err get lesson', err)
        })
    })
}

export const getGame = (level,idLesson) => (dispatch) => {
    return new Promise((resolve, reject) => {
        get_game(level, idLesson)
        .then((resp) => {
            resolve(resp)
            if(resp.data){
                dispatch({
                    type: SET_JEUX,
                    value: resp.data
                })
            }
        })
        .catch((err) => {
            reject(err)
            console.log('err')
        })
    })
}

export const assimilatedLesson = (idUser, data, token) => (dispatch) => {
    const user = store.getState().user.user
    return new Promise((resolve, reject) => {
        assimilated_lesson(idUser, data, token)
        .then((res) => {
            resolve(res)
            if(res.message) {
                dispatch(get_infos_user(user.id, user.token))
            }
            console.log('assimilated lesson', res)
        })
        .catch((err) => {
            reject(err)
            console.log('err assimilated lesson', err)
        })
    })
}