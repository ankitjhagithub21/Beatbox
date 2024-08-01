import { useEffect, useState } from 'react'
import {  useDispatch, useSelector} from 'react-redux'
import { setSongs } from '../app/appSlice'

const useFetchSongs = () => {
  const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()
   const {searchTerm,pageNumber} = useSelector(state=>state.app)
  const fetchSongs = async () => {
    try {
        setLoading(true)
        const res = await fetch(`https://saavn.dev/api/search/songs?query=${searchTerm}&page=${pageNumber}&limit=20`)
        const data = await res.json()
       
        const songs = data.data.results.map((song)=>{
            
            return {
                id:song.id,
                name:song.name,
                year:song.year,
                image:song.image[song.image.length-1].url,
                artists:song.artists.primary,
                downloadUrl:song.downloadUrl[song.downloadUrl.length-1].url,
                
            }
            
        })
        
        dispatch(setSongs(songs))

    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}
useEffect(()=>{
    fetchSongs()
},[searchTerm,pageNumber])
return loading

}

export default useFetchSongs
