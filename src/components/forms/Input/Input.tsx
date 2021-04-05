import React, { forwardRef, useCallback } from 'react'
import { useUniqueId, useReducerState } from 'hooks'
import cx from 'classnames'

import s from './Input.scss'


export type InputProps = {
  id?: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number' | 'search'
  label: string
  errors: {
    [key: string]: string
  }
  getValues: (key: string) => string
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: (value: any) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id, name, type, size, label, errors, getValues,
    onFocus, onBlur, onChange,
  } = props

  const [ { isFocused, isFilled }, setState ] = useReducerState({
    isFocused: false,
    isFilled: getValues(name),
  })

  const handleFocus = useCallback((event) => {
    setState({ isFocused: true })

    if (typeof onFocus === 'function') {
      onFocus(event)
    }
  }, [ onFocus, setState ])

  const handleBlur = useCallback((event) => {
    setState({ isFocused: false })

    if (typeof onBlur === 'function') {
      onBlur(event)
    }
  }, [ onBlur, setState ])

  const handleChange = useCallback((event) => {
    const value = event.target.value
    console.log('onChange')

    if (isFilled && !value) {
      setState({ isFilled: false })
    }

    if (!isFilled && value) {
      setState({ isFilled: true })
    }
    
    if (typeof onChange === 'function') {
      onChange(event)
    }
  }, [ isFilled, onChange, setState ]) 
  console.log('onChange RENDER')
  const error = errors[name]

  const isErrored = Boolean(error)

  const rootClassName = cx(s.root, s[`size-${size}`], {
    [s.focused]: isFocused,
    [s.filled]: isFilled,
    [s.errored]: isErrored,
  })

  const uniqueId = useUniqueId('input-')
  const controlId = id || uniqueId

  return (
    <div className={rootClassName}>
      <div className={s.inputContainer}>
        <label className={s.label} htmlFor={controlId}>
          {label}
        </label>
        <input
          id={controlId}
          name={name}
          className={s.input}
          ref={ref}
          type={type}
          // value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={isErrored}
        />
      </div>
      {
        isErrored && (
          <div className={s.error}>
            {'error'}
          </div>
        )
      }
    </div>
  )
})


export default Input
