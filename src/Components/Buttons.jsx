import React from 'react'
import { categories } from '../utils/constant'

const Buttons = () => {
  return (
    <div className='flex gap-6 overflow-x-auto'>
        {categories.map((btn,idx)=>{
            return <button key={idx} style={{background:'#121212'}} className='category-btn  text-white'>{btn.name}</button>
        })}
    </div>
  )
}

export default Buttons