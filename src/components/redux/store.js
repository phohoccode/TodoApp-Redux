import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../Filters/FilterSlice'
import todoSlice from '../TodoList/TodoSlice'


// redux thuần
// const store = createStore(
//     rootReducer,
//     composeWithDevTools()
// )

// redux toolkit
const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoSlice.reducer
    }
})

export default store