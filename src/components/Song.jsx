import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrSong } from "../app/appSlice"
import { useNavigate } from 'react-router-dom'

const Song = ({ song }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () =>{
    dispatch(setCurrSong(song))
    navigate(`/song/${song.id}`)
  }
  return (
    <div className='lg:w-[220px] md:w-[150px] w-[120px]  cursor-pointer p-3' onClick={handleClick}>
      <img src={song.image[2].url} alt={song.name} className='rounded-lg' />
    </div>
  )
}

export default Song
