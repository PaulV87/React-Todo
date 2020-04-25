import { useReducer, useEffect } from 'react'

function useLocalStorageReducer(key, defaultValue, reducer) {
  // make piece of state based of the value in localstorage
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    } catch(e){
      value = defaultValue;
    }
    return value
  })
  // useEffect to update local storage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state]);

  return [state, dispatch];
}
export { useLocalStorageReducer };