import { useContext, useState } from 'react'
import './App.css'
import Child from './components/Child'
import { BasicContext } from './BasicContextProvider'

function App() {
  const {count, setCount, text} = useContext(BasicContext)

  return (
    <div style={{border: '2px solid black'}}>
      <h1>{text}</h1>
      <h1>parent component</h1>
      <h1>{count}</h1>
      <Child />

    </div>
  )
}

export default App
