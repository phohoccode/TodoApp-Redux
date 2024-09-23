import { createSelector } from 'reselect';

export const filterStatusSelector = (state) => state.filter.status
export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filter.search

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    (todoList, status, searchText) => {
        return todoList.filter(todo => {
            if (status === 'All') {
                return todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) && (
                status === 'Completed' ? todo.completed : !todo.completed
            )

        })
    }
)