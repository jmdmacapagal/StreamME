import axios from 'axios'
import history from '../history'

export const fetchStreams = () => async dispatch => {
    const data = await fetch('http://localhost:4000/streams')
    const response = await data.json()

    dispatch({ type: 'FETCH_STREAMS', payload: response })
}

export const createStream = (formValues) => async dispatch => {
    const response = await axios.post('http://localhost:4000/streams', formValues)

    dispatch({ type: 'CREATE_STREAM', payload: response.data })
    history.push('/')
}

export const fetchStream = streamId => async dispatch => {
    const response = await axios.get(`http://localhost:4000/streams/${streamId}`)

    dispatch({ type: 'FETCH_STREAM', payload: response.data })
}

export const deleteStream = streamId => async dispatch => {
   await axios.delete(`http://localhost:4000/streams/${streamId}`)

    dispatch({ type: 'DELETE_STREAM', payload: streamId })
    history.push('/')
}

export const editStream = (streamId, formValues) => async dispatch => {
    const response = await axios.patch(`http://localhost:4000/streams/${streamId}`, formValues)

    dispatch({ type: 'EDIT_STREAM', payload: response.data })
    history.push('/')
}

export const logIn = () => {
    return {
        type: 'LOG_IN'
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
}
