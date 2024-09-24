// const initState = [
//     { id: 1, name: 'phohoccode', completed: false, priority: 'Medium' },
//     { id: 2, name: 'nhan quoc viet', completed: true, priority: 'High' },
//     { id: 3, name: 'Phodeptrai', completed: false, priority: 'Low' },
// ]

// const todoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]

//         case 'todoList/toggleTodoStatus':
//             return state.map(
//                 todo => todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             )

//         default: return state
//     }
// }

// export default todoReducer


import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'phohoccode', completed: false, priority: 'Medium' },
        { id: 2, name: 'nhan quoc viet', completed: true, priority: 'High' },
        { id: 3, name: 'Phodeptrai', completed: false, priority: 'Low' },
    ],
    reducers: {
        addTodo: (state, action) => {
            console.log('action.type', action.type)
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo && (currentTodo.completed = !currentTodo.completed)
        }
    }
})