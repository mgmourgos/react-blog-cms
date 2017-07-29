import C from '../../constants.js'

export const posts = (state={}, action) => {
    switch (action.type) {
        case C.ADD_POST:
            return [
                ...state,
                {
                    title: action.title,
                    content: action.content
                }
            ]
        case C.REMOVE_POST:
            return state.filter(
                c => c.id !== action.id
            )
        case C.EDIT_POST:
            return state.map((post, i) => {
                if (post.id === action.id) {
                    return {
                        id: post.id,
                        title: action.title,
                        content: action.content
                    }
                }
                return post
            })
        case C.SET_POSTS:
            return [...action.posts]
        default :
            return state
    }
}
