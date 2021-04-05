import { useCallback, useState } from 'react'


type ParamCallback<T> = (state: Partial<T>) => Partial<T>
type SetStateParam<T> = Partial<T> | ParamCallback<T>
type SetState<T> = (param: SetStateParam<T>) => void

const useReducerState = <T extends object>(initialState: T): [ T, SetState<T> ] => {
  const [ state, _setState ] = useState(initialState)

  const setState = useCallback((value) => (
    _setState((prevState) => {
      let newState = value

      if (typeof value === 'function') {
        newState = value(prevState)
      }

      return {
        ...prevState,
        ...newState,
      }
    })
  ), [])

  return [ state, setState ]
}


export default useReducerState
