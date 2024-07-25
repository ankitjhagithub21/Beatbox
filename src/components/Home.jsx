import Slider from './Slider'
import Loader from './Loader'
import useFetchSongs from '../hooks/useFetchSongs'
import { useSelector } from 'react-redux'



const Home = () => {
    const {songs} = useSelector(state=>state.app)
    const loading = useFetchSongs()
   
   
     return (
        <>
            {
                loading ? <Loader /> : <Slider songs={songs} />
            }
        </>
    )
}

export default Home
