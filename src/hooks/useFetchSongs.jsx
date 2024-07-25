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
        const res = await fetch(`https://saavn.dev/api/search/songs?query=${searchTerm}`)
        const data = await res.json()
        const result = data.data.results
        dispatch(setSongs(result))

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
