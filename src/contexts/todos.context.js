// todos
// all methods to interact w/ todos

import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: "Pet a monkey", completed: false },
  { id: 2, task: "Release ladybugs", completed: true },
  { id: 3, task: "Plant a money tree", completed: false } 
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return(
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}