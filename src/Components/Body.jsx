import React from 'react'
import {Sidebar,Main} from './index'

const Body = () => {
  return (
    <div className='w-full h-full flex'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Body