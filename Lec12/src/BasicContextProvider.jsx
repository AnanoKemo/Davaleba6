import React, { createContext, useState } from 'react'

export const BasicContext = createContext()

export default function basicContextProvider({children}) { 
    const [count, setCount] = useState(0)
    const [text, setText] = useState
  return (
    <BasicContext.Provider value ={{
        name:'giorgi',
        count, 
        setCount
    }}>
      {children}
    </BasicContext.Provider>
  )
}
