import React, { useState } from 'react'
import { setSearchTerm } from '../app/appSlice'
import { useDispatch } from "react-redux"
import { GoSearch } from "react-icons/go"
import {useNavigate} from "react-router-dom"


const SearchBar = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setSearchTerm(query))
        navigate("/")
      
    }
    return (
        <div className='fixed w-full p-2 shadow top-0  bg-white flex gap-2  items-center justify-between'>
            <div className='md:flex gap-2 items-center hidden'>
                <img src="/vite.svg" alt="logo" />
                <h2 className='font-bold font-serif text-xl'>Beat<span className='text-red-500'>Box</span></h2>
            </div>
            <form className='lg:w-1/3 w-full flex items-center bg-gray-200 rounded-full px-2 py-2' onSubmit={handleSubmit}>
                <input type="text" value={query} className='border w-full bg-transparent pl-2 outline-none' placeholder='Search song...' onChange={(e)=>setQuery(e.target.value)} required/>
                <GoSearch size={24} />
                
            </form>
        </div>
    )
}

export default SearchBar
