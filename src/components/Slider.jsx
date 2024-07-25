import Song from "./Song"

const Slider = ({songs}) => {

  return (
    <div className='flex flex-col items-center justify-center my-24 w-full'>
     <div className='grid grid-rows-2 grid-flow-col-dense  overflow-x-scroll lg:w-[80vw] w-full'>
     {
        songs.map((song)=>{
            return  <Song key={song.id} song={song}/>
        })
     }
     </div>
     
    </div>
  )
}

export default Slider
