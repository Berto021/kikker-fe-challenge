import { useState } from 'react'

import './App.css'
import SearchInput from './Components/SearchInput'
import Logo from './Components/Logo'

function App() {

  return (
    <div className='input-container'>
      <Logo />
      <SearchInput />
    </div>
  )
}

export default App
