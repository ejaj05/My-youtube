import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Body, WatchPage } from './Components'

const App = () => {
  return (
    <div className='bg-[#000] w-full min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Body/>}/>
        <Route path='/watch/:id' element={<WatchPage/>}/>
      </Routes>
    </div>
  )
}

export default App