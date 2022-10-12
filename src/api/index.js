import axios from 'axios'
import { baseUrl } from '../config'

export function signUp(data) {
    return fetch(baseUrl + '/auth/add-user',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: data
    })
    .then((res) => res.json())
}

export function signIn(data){
    return fetch(baseUrl + '/auth/login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
}

export function login_facebook(data){
    return fetch(baseUrl + '/auth/add-social-user',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
}

export function assimilated_lesson(idUser, data, token) {
    return fetch(baseUrl + `/user/${idUser}/lesson`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
}

export function getUser(idUser, token){
    return fetch(baseUrl + `/user/${idUser}`,{
        headers: {
            Accept: 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then((res) => res.json())
}

export function sendcode(data){
    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/password/email',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
}

export function verifycode(token){
    return new Promise((resolve, reject) => {
        fetch(baseUrl + `/password/find/${token}`)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
}

export function reset_password(data){
    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/password/reset',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
}

export function update_account(user, data){
    return fetch(baseUrl + `/user/${user.id}/edit`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Authorization': 'Bearer ' + user.token
        },
        body: data
    })
    .then((res) => res.json())
}

export function getLessonsLevel(level){
    return fetch(baseUrl + `/lessons/${level}`)
    .then((res) => res.json())
}

export function getSingleLesson(idLesson, token) {
    return fetch(baseUrl +  `/lesson/${idLesson}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then((res) => res.json())
}

export function get_game(level, idLesson) {
    return fetch(baseUrl +  `/b-a-ba-${level}/lesson/${idLesson}/game`)
    .then((res) => res.json())
}

export function getInfosSolodou(){
    return fetch(baseUrl + '/pages')
    .then((res) => res.json())
}

export function getFaq() {
    return fetch(baseUrl + '/faqs')
    .then((res) => res.json())
}

export function gethelpVideo() {
    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/help/videos/*mobile*')
        .then((res) => res.json())
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
}