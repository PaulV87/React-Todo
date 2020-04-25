import React, { usestate, useReducer } from 'react';
import TodoApp from './TodoApp';
import './App.css';

function countReducer(state, action){
  switch(action.type){
    case "INCREMENT" : return {count: state.count + action.amount};
    case "DECREMENT" : return {count: state.count - action.amount};
    case "RESET": return { count: 0 } 
  }
}

function ExampleReducer() {
  const [state, dispatch] = useReducer(countReducer, {count: 0})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT", amount: 1})} >Add 1</button>
      <button onClick={() => dispatch({type: "DECREMENT", amount: 1})}>Subtract 1</button>
      <button onClick={() => dispatch({type: "INCREMENT", amount: 5})}>Add 5</button>
      <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </div>
  );
}

export default ExampleReducer;
