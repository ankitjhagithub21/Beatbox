import "./App.css"
import Player from './components/Player'
import SearchBar from './components/SearchBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import SongDetails from './components/SongDetails'

const App = () => {
 
  return (
    <BrowserRouter>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/song/:id' element={<SongDetails/>}/>
      </Routes>
     

      <Player/>
    </BrowserRouter>
  )
}

export default App
