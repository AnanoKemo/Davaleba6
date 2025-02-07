import React from 'react'
import useKeyPress from '../hooks/useKeyPress'

function Child({count, count2}) {
    console.log('render child component')
    const key = useKeyPress
  return (
    <div style = {{border: '2px solid red'}}>
        <h1>Child Component</h1>
        <h1>{count}</h1>
        <h1>{count2}</h1>
    </div>
  )
}

export default React.memo(Child)