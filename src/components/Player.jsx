import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { setCurrSong, setSongIndex } from '../app/appSlice';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Player = () => {
  const { currSong, songs, songIndex,pageNumber } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const prevSong = () => {
    if (songIndex > 0) {
      const newIndex = songIndex - 1;
      dispatch(setSongIndex(newIndex));
      dispatch(setCurrSong(songs[newIndex]));
    }
  };

  const nextSong = () => {
    let newIndex;
    if (songIndex < songs.length - 1) {
      newIndex = songIndex + 1;
    } else {
      newIndex = 0;
      
    }
    dispatch(setSongIndex(newIndex));
    dispatch(setCurrSong(songs[newIndex]));
  };

  if (!currSong) return null;

  return (
    <div className='fixed bottom-0 w-full flex flex-col bg-gray-100'>
      <AudioPlayer
        autoPlay={true}
        src={currSong.downloadUrl}
        showJumpControls={false}
        onEnded={nextSong}
        className='z-50'
      />
      <button onClick={prevSong} className='z-50 fixed left-[35vw] md:left-[45vw] bottom-4'>
        <MdSkipPrevious size={30} color='gray' />
      </button>
      <button onClick={nextSong} className='z-50 fixed right-[35vw] md:right-[45vw] bottom-4'>
        <MdSkipNext size={30} color='gray' />
      </button>
    </div>
  );
};

export default Player;
