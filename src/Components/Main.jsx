import React from 'react'
import { Buttons } from '.'
import VideoContainer from './VideosContainer'

const Main = () => {
  return (
    <div className='h-screen flex-1 px-8 overflow-x-hidden'>
      <Buttons/>
      <VideoContainer/>
    </div>
  )
}

export default Main