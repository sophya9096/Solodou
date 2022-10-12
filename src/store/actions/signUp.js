import {signUp} from '../../api'
import { IS_LOADING, SET_MESSAGE_ERROR, SET_USER, MEMORY_USER } from './types'

export const register = (data, navigation) => (dispatch) => {
    return new Promise((resolve, reject) => {
        signUp(data)
        .then((res) => {
            debugger
            resolve(res)
            if(res.errors){
                dispatch({
                    type: SET_MESSAGE_ERROR,
                    value: {
                        invalidParam: res.errors
                    }
                })
            }
            else if(res.data){
                dispatch({
                    type: SET_MESSAGE_ERROR,
                    value: ''
                })
                dispatch({
                    type: SET_USER,
                    value: res.data
                })
                dispatch({
                    type: MEMORY_USER,
                    value: data
                })
                navigation.push('DrawerNavigator')
            }
        console.log('user signUp', res)
    })
    .catch((err) => {
        reject(err)
        console.log('err signUp', err)
    })
    })
}