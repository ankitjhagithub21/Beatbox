import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
const Player = () => {
    const {currSrc} = useSelector(state=>state.app) 
  return (
    <div className='fixed bottom-0 w-full z-50'>
        <AudioPlayer
        autoPlay
        src={currSrc}
       
     
      />
    </div>
  )
}

export default Player
