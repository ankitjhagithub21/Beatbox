import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { setPageNumber } from "../app/appSlice";


const Slider = ({ songs }) => {
  const dispatch = useDispatch()
  const {pageNumber} = useSelector(state=>state.app)
 
  return (
    <div className='flex flex-col items-center gap-5 justify-center my-24 px-5 w-full'>
     
      <div 
        className='flex flex-wrap container mx-auto justify-center gap-4'
        
       
      >
        {
          songs.map((song,index) => {
            return <Song key={song.id} song={song} index={index}/>;
          })
        }
      </div>
      <div className="flex items-center gap-4 justify-center my-5">
        <button className={`${pageNumber === 1 ? 'bg-indigo-300' :'bg-indigo-500' } text-white px-4 py-2 rounded-lg`} onClick={()=>dispatch(setPageNumber(pageNumber > 1 ? pageNumber-1 : pageNumber))}>Prev</button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg" onClick={()=>dispatch(setPageNumber(pageNumber+1))}>Next</button>
      </div>
      
    </div>
  );
};

export default Slider;
