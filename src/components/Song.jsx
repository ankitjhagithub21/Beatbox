import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrSrc } from '../app/appSlice'

const Song = ({ imgSrc, name, songSrc }) => {
  const dispatch = useDispatch()
  const handleClick = () => {

    dispatch(setCurrSrc(songSrc))
  }
  return (
    <div onClick={handleClick} className='lg:w-1/6 md:w-1/4 w-1/2 p-3'>

      <div className='cursor-pointer border  relative rounded-lg overflow-hidden '>
        <img src={imgSrc} alt={name} className=' hover:scale-110 transition duration-300' loading='lazy' />
       
      </div>


    </div>
  )
}

export default Song
