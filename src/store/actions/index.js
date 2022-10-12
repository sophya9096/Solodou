import { auth, loginFacebook} from './signIn'
import { register } from './signUp'
import { get_infos_user } from './getUser'
import { getFaqs, getInfosCms} from './cms'
import { update_profile } from './updateCount'
import { get_lesson_level, getLesson, assimilatedLesson, getGame } from './lesson'

export {
    register, auth, get_infos_user,
    getInfosCms, getFaqs, update_profile,
    get_lesson_level, getLesson, loginFacebook,
     assimilatedLesson, getGame
}