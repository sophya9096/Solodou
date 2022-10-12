import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from './reducers/userReducer'
import loadingReducer from './reducers/loadingReducer'
import messageReducer from './reducers/messageReducer'
import cmsReducer from './reducers/cmsReducer'
import infosUserReducer from './reducers/infosUserReducer'
import lessonReducer from './reducers/lessonReducer'
import videoDemoReducer from './reducers/videoDemoReducer'

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  message: messageReducer,
  cms: cmsReducer,
  infosUser: infosUserReducer,
  lesson: lessonReducer,
  videoDemo: videoDemoReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'infosUser', 'cms']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

export  { store, persistor }
