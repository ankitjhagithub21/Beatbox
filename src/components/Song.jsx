import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrSong, setSongIndex } from "../app/appSlice"
import { useNavigate } from 'react-router-dom'

const Song = ({ song,index }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {currSong} = useSelector(state=>state.app)
  const handleClick = () =>{
   
    const arr = song.name.split(' ')
    const songName  = arr.join("-")
    dispatch(setCurrSong(song))
    navigate(`/song/${songName}`)
    
    dispatch(setSongIndex(index))
  }
  return (
    <div className='lg:w-[220px] md:w-[180px] w-[150px]  cursor-pointer relative' onClick={handleClick}>
      <img src={song.image} alt={song.name} className='rounded-lg' />
     
     <div className='md:block hidden p-1'>
     <p className='text-sm'>{song.name.slice(0,28)}</p>
     <p className='text-xs text-gray-600 font-bold'>{song.artists[0]?.name}</p>
     </div>

    </div>
  )
}

export default Song
