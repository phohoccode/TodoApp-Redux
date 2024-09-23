import { combineReducers } from 'redux'
import todoReducer from "../TodoList/TodoSlice"
import filterReducer from "../Filters/FilterSlice"

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoReducer
})

export default rootReducer