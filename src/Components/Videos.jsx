import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <div className='flex flex-wrap gap-6'>
        {videos.map((item,idx)=>(
            <VideoCard key={idx} item={item}/>
        ))}
    </div>
  )
}

export default Videos