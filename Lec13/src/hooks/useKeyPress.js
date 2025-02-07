import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'

export default function useKeyPress(){
    const [key, setKey] = useState('')
useEffect(() => {
    const keyPress = (e) => {
      console.log(e.key)
    }
    window.addEventListener('keyup', keyPress)
    return() => {
      window.removeEventListener('keyup', keyPress)
    }
  })
}