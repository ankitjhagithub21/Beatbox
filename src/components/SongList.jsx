
import { useDispatch, useSelector } from 'react-redux'
import { setCurrSong, setIsOpen } from '../app/appSlice'
import { FaPause, FaPlay } from 'react-icons/fa'

const SongList = () => {
   
    const {songs,currSong,isOpen} = useSelector(state=>state.app)
    const dispatch = useDispatch()
  return (
    <div className={`h-screen sidebar lg:w-1/3 overflow-y-scroll w-full fixed ${isOpen ? 'right-0':'-right-full'}  bg-black top-0 z-10 `}>
       <div className='flex text-white items-center justify-between mt-5 px-5'>
        <p>Song List</p>
       <button onClick={()=>dispatch(setIsOpen(false))} className='rounded-full border text-white px-3 py-1'>X</button>
       </div>
        <div className='flex flex-col p-5 gap-4'>
            {
                songs?.map((song)=>{
                    return <div className='px-4 py-2 rounded-full flex items-center gap-2 bg-white shadow-lg cursor-pointer hover:scale-105' key={song.id} onClick={()=>dispatch(setCurrSong(song))}>
                       {
                        song.id == currSong?.id ? <FaPause/> : <FaPlay/>
                       }
                        {song.name}</div>
                })
            }
        </div>
        
        <p className='text-white text-center py-3'>Developed By <a href="http://ankitjha.vercel.app/" target='_blank' className='text-blue-500 underline'>Ankit Jha</a></p>
    </div>
    
  )
}

export default SongList
