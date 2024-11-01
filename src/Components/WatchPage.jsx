import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  CommentContainer from './CommentContainer'

const WatchPage = () => {
    const {id} = useParams()
    const [videoDetail, setVideoDetail] = useState([])
    console.log(id)
    const getChannelDetails = async()=>{
      const data = await fetch(Channel)
    }
    useEffect(()=>{
      
    },[])
  return (
    <div className='px-5 md:px-20 py-5'>
        <iframe className='rounded-xl w-[390px] h-[300px] md:w-[900px] md:h-[500px]' src={"https://www.youtube.com/embed/"+id}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <CommentContainer id={id}/>
    </div>
  )
}

export default WatchPage