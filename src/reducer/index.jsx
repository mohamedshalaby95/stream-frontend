import {combineReducers} from 'redux'
import {authReducer} from './authreducer'
import { reducer as reduxForm} from 'redux-form'
import {reducerstreams} from'./reducerstream'

export default combineReducers ({

    authReducer:authReducer,
    form:reduxForm,
    streams:reducerstreams
})