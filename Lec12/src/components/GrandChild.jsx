import React, { useContext } from 'react'
import { BasicContext } from '../BasicContextProvider'

export default function GrandChild() {
    const {name, setCount, setText} = useContext(BasicContext)
    console.log(name, 'context from grandchild')
  return (
    <div style={{border: '2px solid red'}}>
        <h1>GrandChild component {name}</h1>
        <button onClick ={() => setCount(prev => prev + 1)}>count Increase</button>
        <input type="text"  onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}
