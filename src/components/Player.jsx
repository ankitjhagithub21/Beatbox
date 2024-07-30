import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const Player = () => {
  const { currSong } = useSelector(state => state.app)

  if (!currSong) return
  return (
    <div className='fixed bottom-0 w-full z-10 flex flex-col bg-gray-100'>

      <AudioPlayer
         autoPlay={true}
        src={currSong.downloadUrl}
        

      />

    </div>
  )
}

export default Player
