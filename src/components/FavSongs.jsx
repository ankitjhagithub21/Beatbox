import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux"
import { setCurrSong } from '../app/appSlice';
const FavSongs = () => {
  const [favSongs, setFavSongs] = useState([]);
 const dispatch = useDispatch()
  useEffect(() => {
    const savedFavSongs = JSON.parse(localStorage.getItem('favSongs')) || [];
    setFavSongs(savedFavSongs);
  }, []);

  const handleRemoveFromFav = (songId) => {
    // Remove the song with the given ID from the favorites
    const updatedFavSongs = favSongs.filter(song => song.id !== songId);
    setFavSongs(updatedFavSongs);
    localStorage.setItem('favSongs', JSON.stringify(updatedFavSongs));
  };

  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-5 text-center text-white">Your Favorite Songs</h2>
        {favSongs.length === 0 ? (
          <p className='text-white'>No favorite songs added yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-4 ">
            {favSongs.map((song) => (
              <div key={song.id} className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105" >
                <img src={song.image} alt={song.name} className="rounded-lg mb-4 w-full" onClick={()=>dispatch(setCurrSong(song))}/>
                <h3 className="text-xl font-bold">{song.name}</h3>
                <p className="mt-2">Year: {song.year}</p>
                <button
                  onClick={() => handleRemoveFromFav(song.id)}
                  className="bg-red-500 text-white rounded-full px-3 py-1  text-xs mt-4 flex items-center gap-1"
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavSongs;
