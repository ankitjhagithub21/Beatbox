import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { setPageNumber } from "../app/appSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Slider = ({ songs }) => {
  const dispatch = useDispatch()
  const {pageNumber} = useSelector(state=>state.app)


  return (
    <div className='flex flex-col items-center gap-5 justify-center my-24 px-5 w-full'>
     
      <div 
        className='grid grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto w-full  gap-4'
        
       
      >
        {
          songs?.map((song,index) => {
            return <Song key={song.id} song={song} index={index}/>;
          })
        }
      </div>
      <div className="flex items-center gap-4 justify-center my-5">
        <button className={`${pageNumber === 1 ? 'bg-green-300' :'bg-green-500' } text-white p-2 rounded-full`} onClick={()=>dispatch(setPageNumber(pageNumber > 1 ? pageNumber-1 : pageNumber))}>
        <FaArrowLeft />
        </button>
        <button className="bg-green-500 text-white p-2 rounded-full" onClick={()=>dispatch(setPageNumber(pageNumber+1))}>
          <FaArrowRight/>
        </button>
      </div>
      
    </div>
  );
};

export default Slider;
