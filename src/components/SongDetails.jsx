import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const SongDetails = () => {
  const { currSong } = useSelector(state => state.app)

   if(!currSong){
    return <Navigate to={"/"}/>
   }
  return (
  <section className='py-24 px-4'>
      <div className='container mx-auto mb-5  flex flex-wrap'>
      <div className='md:w-1/2 w-full'>
        <img src={currSong?.image[2].url}  alt={currSong?.name}  className='rounded-lg mx-auto' />
      </div>
      <div>
        <h2 className='text-2xl font-bold mt-5'>{currSong?.name}</h2>
        <p className='mt-2 text-lg'>Year : {currSong?.year}</p>
        
      </div>
   <div className='w-full overflow-x-scroll'>
   <h2 className='text-2xl my-5 font-bold'>Artists</h2>
    <div className='flex items-center gap-2 overflow-x-scroll'>
      {
        currSong?.artists.primary.map((artist)=>{
          return <div className='flex flex-col gap-1 items-center cursor-pointer' key={artist.id}>
            
           <img src={artist.image[2].url} alt={artist.name} className='min-w-32 w-32 rounded-full object-contain' />
           <p>{artist.name}</p>
          </div>
        })
      }
    </div>
   </div>
    </div>
   
  </section>
  )
}

export default SongDetails

