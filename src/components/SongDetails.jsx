import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaDownload } from "react-icons/fa"
import { setSearchTerm } from '../app/appSlice'
const SongDetails = () => {
  const { currSong } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const handleDownload = async () => {
    try {
        const response = await fetch(currSong.downloadUrl);
        const blob = await response.blob();

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${currSong.name}.mp3`;

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click event on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the file:', error);
    }
};

  if (!currSong) {
    return <Navigate to={"/"} />
  }
  return (
    <section className='py-24 px-4'>
      <div className='container mx-auto mb-5  flex flex-wrap'>
        <div className='md:w-1/2 w-full'>
          <img src={currSong.image} alt={currSong.name} className='rounded-lg mx-auto' />
        </div>
        <div>
          <h2 className='text-2xl font-bold mt-5'>{currSong.name}</h2>
          <p className='mt-2 text-lg'>Year : {currSong.year}</p>
          <button onClick={handleDownload} className='bg-green-500 text-white rounded-full px-4 py-2 mt-4 flex items-center gap-1'>Download Song <FaDownload /></button>
        </div>
        <div className='w-full overflow-x-scroll'>
          <h2 className='text-2xl my-5 font-bold'>Artists</h2>
          <div className='flex items-center gap-2 overflow-x-scroll'>
            {
              currSong.artists.map((artist) => {
                return <div className='flex flex-col gap-1 items-center  cursor-pointer hover:scale-105' key={artist.id} onClick={()=>{
                   navigate("/")
                  dispatch(setSearchTerm(artist.name))
                }}>

                  {
                    artist.image[2].url && <>

                      <img src={artist.image[2].url} alt={artist.name} className='min-w-32 w-44 rounded-full object-contain' />
                      <p>{artist.name}</p>
                    </>
                  }

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

