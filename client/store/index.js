import { createStore,
         combineReducers,
         applyMiddleware } from 'redux'
import { posts } from './reducers/postReducers'
import { auth } from './reducers/authReducers'
import { reducer as formReducer } from 'redux-form'
import stateData from './initialState'
import thunk from 'redux-thunk'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    createStore(
        combineReducers({posts, auth, form:formReducer}),
        ((localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
        ),
        applyMiddleware(thunk, logger, saver)
    )

export default storeFactory
