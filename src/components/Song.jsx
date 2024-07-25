import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrSong } from "../app/appSlice"

const Song = ({song}) => {
    const dispatch = useDispatch()
  return (
    <div className='lg:w-[220px] md:w-[150px] w-[120px]  cursor-pointer p-3' onClick={()=>dispatch(setCurrSong({
        name:song.name,
        src:song.downloadUrl[2].url,
        image:song.image[2].url,
        artist:song.artists.primary[0].name
      }))}>
        <img src={song.image[2].url} alt={song.name}  className='rounded-lg'/>
      </div>
  )
}

export default Song
