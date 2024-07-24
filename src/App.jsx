import React, { useState } from 'react';

import './App.css';
import Player from './components/Player';
import Song from './components/Song';

function App() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [src, setSrc] = useState('');

  const searchSong = async () => {
    try {
      const res = await fetch(`https://saavn.dev/api/search/songs?query=${query}`);
      const data = await res.json();
      setSongs(data.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  return (
    <div>
     <div className='lg:w-1/2 mx-auto gap-1 p-5 w-full flex items-center  justify-center'>
     <input type="text" className='border w-full  p-2 rounded-lg' value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search song.." />
     <button className='bg-green-500 text-white rounded-lg px-4 py-2' onClick={searchSong}>Search</button>
     </div>
      <Player/>
      <div className='flex flex-wrap  mt-5 mb-24 container mx-auto'>
        {songs.map((song) => (
         <Song key={song.id} imgSrc={song.image[2]?.url} songSrc= {song.downloadUrl[2].url} name={song.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
