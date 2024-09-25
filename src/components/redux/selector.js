// import { createSelector } from 'reselect';
import { createSelector } from '@reduxjs/toolkit';

export const filterStatusSelector = (state) => state.filter.status
export const todoListSelector = (state) => state.todoList.todos
export const searchTextSelector = (state) => state.filter.search
export const filterPrioritiesSelector = (state) => state.filter.priority

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
    
        return todoList.filter(todo => {
            if (status === 'All') {
                return priorities.length !== 0
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) && 
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length !== 0 ? priorities.includes(todo.priority) : true)
        })
    }
)