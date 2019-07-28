import _ from 'lodash'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const streamsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STREAMS':
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case 'FETCH_STREAM':
            return { ...state, [action.payload.id]: action.payload }
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]: action.payload }
        case 'DELETE_STREAM':
            return _.omit(state, action.payload)
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload }

        default:
            return state
    }
}

const authReducer = (state = { isLogged: false }, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return { ...state, isLogged: true }
        case 'LOG_OUT':
            return { ...state, isLogged: false }

        default:
            return state
    }
}

export default combineReducers({
    streams: streamsReducer,
    form: formReducer,
    auth: authReducer
})