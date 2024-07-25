import React,{useState,useEffect} from 'react'
import Slider from './Slider'
import Loader from './Loader'
import {  useDispatch, useSelector } from 'react-redux'
import { setSongs } from '../app/appSlice'



const Home = () => {
  
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { searchTerm,songs } = useSelector(state => state.app)
    
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
        if(!songs){
            fetchSongs()
        }else{
            setLoading(false)
        }
    },[])
   
     return (
        <>
            {
                loading ? <Loader /> : <Slider songs={songs} />
            }
        </>
    )
}

export default Home
