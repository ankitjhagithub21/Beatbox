import React, { useEffect, useState } from 'react'
import "./App.css"
import Slider from './components/Slider'
import Loader from './components/Loader'
import Player from './components/Player'
import { useSelector } from 'react-redux'
import SearchBar from './components/SearchBar'
const App = () => {
  const [songs,setSongs] = useState([])
  const [loading,setLoading] = useState(true)
  const{searchTerm} = useSelector(state=>state.app)
  const fetchSongs = async() =>{
          try{
            setLoading(true)
            const res =  await fetch(`https://saavn.dev/api/search/songs?query=${searchTerm}`)
            const data = await res.json()
            console.log(data)
            setSongs(data.data.results)
           
          }catch(error){
            console.log(error)
          }finally{
            setLoading(false)
          }
  }
  useEffect(()=>{
   fetchSongs()
   
  },[searchTerm])
  return (
    <div>
      <SearchBar/>
      {
        loading ? <Loader/> : <Slider songs={songs}/>
      }
     

      <Player/>
    </div>
  )
}

export default App
