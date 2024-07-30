import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaBookmark, FaDownload, FaSave } from "react-icons/fa"
import { setCurrSong, setSearchTerm } from '../app/appSlice'
import toast from 'react-hot-toast'
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
const handleAddToFav = () =>{
  let favSongs = JSON.parse(localStorage.getItem('favSongs')) || [];
  if (!favSongs.find(song => song.id === currSong.id)) {
    favSongs.push(currSong);
    localStorage.setItem('favSongs', JSON.stringify(favSongs));
    toast.success('Song added to favorites!');
   
  } else {
    toast.error('Song is already in favorites!');
  }

  navigate("/favourites")
}

  if (!currSong) {
    return <Navigate to={"/"} />
  }
  return (
    <section className='py-24 px-4' >
      <div className='container mx-auto mb-5  flex flex-wrap'>
        <div className='md:w-1/2 w-full'>
          <img src={currSong.image} alt={currSong.name} className='rounded-lg mx-auto' />
        </div>
        <div>
          <h2 className='text-2xl font-bold mt-5'>{currSong.name}</h2>
          <p className='mt-2 text-lg'>Year : {currSong.year}</p>
        <div className='flex gap-2 flex-wrap mt-4'>
        <button onClick={handleDownload} className='bg-green-500 text-white rounded-full px-4 py-2  flex items-center gap-1'>Download Song <FaDownload /></button>
        <button onClick={handleAddToFav} className='bg-green-500  text-white rounded-full px-4 py-2 flex items-center gap-1'>Add to Favourite <FaBookmark /></button>
        </div>
        </div>
        <div className='w-full overflow-x-scroll'>
          <h2 className='text-2xl my-5 font-bold'>Artists</h2>
          <div className='flex items-center gap-2 overflow-x-scroll'>
            {
              currSong.artists.map((artist) => {
                return <div className='flex flex-col gap-1 text-center items-center  cursor-pointer hover:scale-105' key={artist.id} onClick={()=>{
                   navigate("/")
                  dispatch(setSearchTerm(artist.name))
                }}>

                  {
                    artist.image[2]?.url && <>

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

