import React from 'react'
import {useSelector} from 'react-redux'
import { sidebar } from '../utils/constant'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  const menuToggle =  useSelector((state)=>state.app.isMenuOpen)
  return (
    <div className={`h-[85vh] absolute md:relative z-50 bg-black overflow-auto w-[17rem] border-r  ${!menuToggle && 'hidden'} duration-300`}>
        {sidebar.map((category, index) => (
          <button key={index}
          onClick={()=>setSelectedCategory(category.name)}
          className='category-btn'
          style={{
            background:category.name === selectedCategory  && '#FC1503',
            color:'white'
          }}
          >
            <span style={{color:category.name === selectedCategory?'white':'red',marginRight:'15px'}}className='text-xl'>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
    </div>
  )
}

export default Sidebar