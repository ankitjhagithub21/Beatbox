import React from 'react'
import { useSelector } from 'react-redux'

const SongDetails = () => {
    const {currSong} = useSelector(state=>state.app)
  return (
    <div className='lg:w-1/2 mx-auto my-24 text-center'>
      <img src={currSong?.image[2].url} alt="" className='rounded-full mx-auto' width={200} />
      <h2 className='text-3xl font-bold mt-5'>{currSong?.name}</h2>
      {/* <p className='mt-2 text-lg'>{currSong?.artists.primary[0].name}</p> */}
    </div>
  )
}

export default SongDetails

