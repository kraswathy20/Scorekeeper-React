import { useState } from 'react'

import './App.css'
import Scorekeeper1 from './Scorekeeper1'

function App() {
  

  return (
    <>
      <Scorekeeper1 numplayers={5} target={3}/>
    </>
  )
}

export default App
