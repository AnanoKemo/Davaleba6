import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Routes>
    <Route path='/' element={ <Home count={count} setCount={setCount}/> }/>
    <Route path='/about' element={ <About count={count} setCount={setCount}/> }/>
    <Route path='/users' element={ <Users /> }/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
