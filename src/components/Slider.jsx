import React, { useRef } from 'react';
import Song from "./Song";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ songs }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className='flex items-center gap-5 justify-center my-24 w-full'>
      <FaArrowLeft 
      size={20}
        className="cursor-pointer md:block hidden"
        color='gray' 
        onClick={scrollLeft} 
      />
      <div 
        className='grid grid-rows-2 grid-flow-col-dense overflow-x-scroll lg:w-[70vw] w-full'
        ref={scrollContainerRef}
      >
        {
          songs.map((song) => {
            return <Song key={song.id} song={song} />;
          })
        }
      </div>
      <FaArrowRight 
      size={20}
        className="cursor-pointer md:block hidden" 
        color="gray" 
        onClick={scrollRight} 
      />
    </div>
  );
};

export default Slider;
