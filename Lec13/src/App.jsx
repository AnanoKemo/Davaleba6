import { useCallback, useState } from 'react'
import Child from './components/Child'
import './App.css'
import useKeyPress from './hooks/useKeyPress'

function App() {
  const key = useKeyPress()
  console.log(key, "key")
  return (
    <div style={{border: '2px solid black'}}>
      <h1>hello world</h1>

      
    </div>
  )
}

export default App
