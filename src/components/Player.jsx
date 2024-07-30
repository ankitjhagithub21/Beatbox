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
      dispatch(setCurrSong(songs[index]))
    }
  }
  if (!currSong) return
  return (
    <div className='fixed bottom-0 w-full z-10 flex flex-col bg-gray-100'>

      <AudioPlayer
        autoPlay={true}
        src={currSong.downloadUrl}
        showJumpControls={false}
        onEnded={nextSong}
      />
      <div className='flex items-center justify-center text-4xl gap-10 text-gray-500 fixed w-full bottom-3'>
        <button onClick={prevSong} >
          <MdSkipPrevious />
        </button>

        <button onClick={nextSong} >
          <MdSkipNext />
        </button>
      </div>


    </div>
  )
}

export default Player
