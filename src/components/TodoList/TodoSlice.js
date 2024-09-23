const initState = [
    { id: 1, name: 'phohoccode', completed: false, prioriry: 'Medium' },
    { id: 2, name: 'nhan quoc viet', completed: true, prioriry: 'High' },
    { id: 3, name: 'Phodeptrai', completed: false, prioriry: 'Low' },
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        default: return state
    }
}

export default todoReducer