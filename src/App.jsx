import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DownloadPage from '../DownloadPage'

function App() {
 

  return (
    <>
     <Routes>
        <Route path='/' element={<DownloadPage/>}/>
     </Routes>
    </>
  )
}

export default App
