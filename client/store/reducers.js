import C from '../constants.js'

export const todos = (state={}, action) => {
    switch (action.type) {
        // case C.ADD_POST:
        //     return [
        //         ...state,
        //         {
        //             id: action.id,
        //             title: action.title
        //         }
        //     ]
        case C.REMOVE_POST:
            return state.filter(
                c => c.id !== action.id
            )
        case C.EDIT_POST:
            return state.map((todo, i) => {
                if (todo.id === action.id) {
                    return {
                        id: todo.id,
                        title: action.title,
                        content: action.content
                    }
                }
                return todo
            })
        case C.SET_POSTS:
            return [...action.todos]
        default :
            return state
    }
}
