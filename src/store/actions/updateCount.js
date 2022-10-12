import {update_account} from '../../api'
import { IS_LOADING, SET_MESSAGE_ERROR, SET_INFOS_USER } from './types'

export const update_profile = (user,data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        update_account(user, data)
        .then((res) => {
            resolve(res)
            if(res.data){
                dispatch({
                    type: SET_INFOS_USER,
                    value: res.data
                })
            }
            console.log('update account', res)
        })
        .catch((err) => {
            reject(err)
            console.log('err update account', err)
        })
    })
}