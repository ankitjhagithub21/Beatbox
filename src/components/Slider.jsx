import Song from "./Song";


const Slider = ({ songs }) => {
 

  return (
    <div className='flex items-center gap-5 justify-center my-24 px-5 w-full'>
     
      <div 
        className='flex flex-wrap container mx-auto justify-center gap-4'
        
      >
        {
          songs.map((song) => {
            return <Song key={song.id} song={song} />;
          })
        }
      </div>
      
    </div>
  );
};

export default Slider;
