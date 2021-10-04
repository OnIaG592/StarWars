const initialState = {
    users: [],
    count: 0,
    id: 1,
    editedUser: [],
    isEnabled: true
}

export const addUser = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            action.payload.id = state.id
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1,
                id: state.id + 1
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((item) => item.id !== action.payload),
                count: state.count - 1
            }
        case "EDITE_USER":
            return {
                ...state,
                isEnabled: false,
                editedUser: state.users.filter((item) => item.id == action.payload),
            }
        case "SAVE_USER":
            return {
                ...state,
                isEnabled:true,
                users: state.users.map((item) => {
                    if (item.id == action.payload.id) {
                        return { ...item, ...action.payload }
                    } else { return item }
                })
            }
        default:
            return state
    }
}