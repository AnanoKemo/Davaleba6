import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
  return (
    <div style={{border: '2px solid black'}}>
    <h1>Child component</h1>
    <GrandChild />
    </div>
  )
}
