import C from '../../constants.js'

export const auth = (state={}, action) => {
    switch(action.type) {
        case C.LOGIN:
            return {
                isLoggedIn: true,
                username: action.username
            }
        case C.LOGOUT:
            return {
                isLoggedIn: false,
                username: ''
            }
        case C.LOG_CHECK:
            return {
                ...state,
                username: action.username
            }
        default :
            return state
    }
}
