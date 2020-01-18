import authReducer from './reducers/authReducer'
import blogReducer from './reducers/blogReducer'
import {combineReducers} from 'redux'

import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    //firestoreReducer is a premade reducer
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer