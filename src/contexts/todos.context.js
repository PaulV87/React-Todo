// todos
// all methods to interact w/ todos

import React, { createContext } from 'react';
import { useLocalStorageReducer } from "../hooks/useLocalStorageHook.reducer" 
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: "Pet a monkey", completed: false },
  { id: 2, task: "Release ladybugs", completed: true },
  { id: 3, task: "Plant a money tree", completed: false } 
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer)
  return(
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}