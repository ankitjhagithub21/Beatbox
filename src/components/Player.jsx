import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrSong } from '../app/appSlice';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
const Player = () => {
  const { currSong, songs } = useSelector(state => state.app)
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const prevSong = () => {
    if (index > 1) {
      setIndex(index - 1)
      dispatch(setCurrSong(songs[index]))
    }
  }
  const nextSong = () => {
    if (index < songs.length) {
      setIndex(index + 1)
    
    }else{
      setIndex(0)
    }
    dispatch(setCurrSong(songs[index]))
  }
  if (!currSong) return
  return (
    <div className='fixed bottom-0 w-full  flex flex-col bg-gray-100'>

      <AudioPlayer
        autoPlay={true}
        src={currSong.downloadUrl}
        showJumpControls={false}
        onEnded={nextSong}
        className='z-50'
       
      />
     
        <button onClick={prevSong} className='z-50 fixed left-[35vw] bottom-4'>
          <MdSkipPrevious size={30} color='gray'/>
        </button>

        <button onClick={nextSong} className='z-50 fixed right-[35vw] bottom-4'>
          <MdSkipNext  size={30} color='gray'/>
        </button>
     


    </div>
  )
}

export default Player
