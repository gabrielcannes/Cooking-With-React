import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

const ConterFunctionComponent = ({ initialCount }) => {

  const [count, setCount] = useState(initialCount)
  const theme = useContext(ThemeContext)
  return (
    <div>
      <button style={theme} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={theme} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default ConterFunctionComponent