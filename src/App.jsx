import "./App.css"
import Player from './components/Player'
import SearchBar from './components/SearchBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import SongDetails from './components/SongDetails'
import NotFound from "./components/NotFound"
import SongList from "./components/SongList"
import {Toaster} from "react-hot-toast"

const App = () => {
 
  return (
    <BrowserRouter>
    <Toaster/>
      <SearchBar/>
      <SongList/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/song/:id' element={<SongDetails/>}/>
        <Route path='/*' element={<NotFound/>}/>
       
      </Routes>
     

      <Player/>
    </BrowserRouter>
  )
}

export default App
