import Slider from './Slider'
import Loader from './Loader'
import useFetchSongs from '../hooks/useFetchSongs'
import { useSelector } from 'react-redux'



const Home = ({loading,songs}) => {
    
   
   
     return (
        <>
            {
                loading ? <Loader /> : <Slider songs={songs} />
            }
        </>
    )
}   

export default Home
