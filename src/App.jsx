import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
 

  return (
   <>
   <div>Learn about redux toolkit</div>
   <Addtodo />
   <Todos />
   </>
  )
}

export default App
