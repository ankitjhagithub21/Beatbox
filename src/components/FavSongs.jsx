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
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-5 text-center">Your Favorite Songs</h2>
        {favSongs.length === 0 ? (
          <p>No favorite songs added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {favSongs.map((song) => (
              <div key={song.id} className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105" onClick={()=>dispatch(setCurrSong(song))}>
                <img src={song.image} alt={song.name} className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold">{song.name}</h3>
                <p className="mt-2">Year: {song.year}</p>
                <button
                  onClick={() => handleRemoveFromFav(song.id)}
                  className="bg-red-500 text-white rounded-full px-4 py-2 mt-4 flex items-center gap-1"
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
