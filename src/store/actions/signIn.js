import { signIn, login_facebook} from '../../api'
import { IS_LOADING, SET_ERROR_CONNECT, SET_USER, MEMORY_USER } from './types'

export const auth = (data, navigation) => (dispatch) => {
    dispatch({type: IS_LOADING})
    return new Promise((resolve, reject) => {
        signIn(data)
        .then((res) => {
            resolve(res)
            dispatch({type: IS_LOADING})
            if(navigation){
                if(res.error){
                    dispatch({
                        type: SET_ERROR_CONNECT,
                        value: 'Numéro de téléphone ou mot de passe incorrect'
                    })
                }
                if(res.token){
                    dispatch({
                        type: SET_ERROR_CONNECT,
                        value: ''
                    })
                    dispatch({
                        type: SET_USER,
                        value: res
                    })
                    dispatch({
                        type: MEMORY_USER,
                        value: data
                    })
                    navigation.push('DrawerNavigator')
                }
            }
            else{
                if(res.token){
                    dispatch({
                        type: SET_USER,
                        value: res
                    })
                }
            }
            console.log('user signIn', res)

        })
        .catch((err) => {
            reject(err)
            dispatch({type: IS_LOADING})
            dispatch({
                type: SET_ERROR_CONNECT,
                value: 'Erreur lors de la connexion, veuillez réessayer'
            })
        })
    })
}

export const loginFacebook = (data, navigation) => (dispatch) => {
    return new Promise((resolve, reject) => {
        login_facebook(data)
        .then((res) => {
            resolve(res)
            if(navigation){
                if(res.errors){
                    dispatch({
                        type: SET_ERROR_CONNECT,
                        value: 'err de connexion avec facebook'
                    })
                }
                if(res.data){
                    dispatch({
                        type: SET_ERROR_CONNECT,
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
            }else{
                if(res.data){
                    dispatch({
                        type: SET_USER,
                        value: res.data
                    })
                }
            }
            console.log('user signIn facebook', res)

        })
        .catch((err) => {
            reject(err)
            console.log('error connect facebbok', err)
        })
    })
}