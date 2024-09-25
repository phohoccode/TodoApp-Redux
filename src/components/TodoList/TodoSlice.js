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


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        status: 'idle',
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            console.log('action.type', action.type)
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo && (currentTodo.completed = !currentTodo.completed)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.status = 'idle'
            })
            .addCase(addNewTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
                state.status = 'idle'
            })
            .addCase(updateTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                
                state.status = 'idle'
            })
    }
})

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', async () => {
        const res = await fetch('/api/todos')
        const data = await res.json()
        return data.todos
    })

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo', async (newTodo) => {
        const res = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(newTodo)
        })
        const data = await res.json()
        return data.todos
    }
)

export const updateTodo = createAsyncThunk(
    'todos/updateTodo', async (id) => {
        const res = await fetch('/api/updateTodo', {
            method: 'POST',
            body: JSON.stringify(id)
        })
        const data = await res.json()
        return data.todos
    }
)

export default todoSlice
