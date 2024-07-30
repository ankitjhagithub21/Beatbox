import { useEffect, useState } from 'react'
import {  useDispatch, useSelector} from 'react-redux'
import { setSongs } from '../app/appSlice'

const useFetchSongs = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
   const {searchTerm} = useSelector(state=>state.app)
  const fetchSongs = async () => {
    try {
        setLoading(true)
        const res = await fetch(`https://saavn.dev/api/search/songs?query=${searchTerm}&limit=20`)
        const data = await res.json()
       
        const songs = data.data.results.map((song)=>{
            return {
                id:song.id,
                name:song.name,
                year:song.year,
                image:song.image[2].url,
                artists:song.artists.primary,
                downloadUrl:song.downloadUrl[2].url,
                
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
},[searchTerm])
return loading

}

export default useFetchSongs
