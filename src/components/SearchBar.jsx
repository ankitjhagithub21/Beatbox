import React, { useState } from 'react'
import { setIsOpen, setSearchTerm } from '../app/appSlice'
import { useDispatch } from "react-redux"
import { GoSearch } from "react-icons/go"
import {Link, useNavigate} from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri";


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
        <div className='fixed w-full p-2 shadow top-0 z-10 bg-black flex gap-2  items-center justify-between'>
            <Link className='md:flex gap-2 items-center hidden' to={"/"}>
                <img src="/vite.svg" alt="logo" />
                <h2 className='font-bold font-serif text-white text-xl'>Beat<span className='text-red-500'>Box</span></h2>
            </Link>
            <form className='lg:w-1/3 border w-full flex items-center bg-[#2A2A2A] rounded-full px-2 py-2' onSubmit={handleSubmit}>
                <input type="text" value={query} className='border w-full border-none text-white bg-transparent pl-2 outline-none' placeholder='Search song...' onChange={(e)=>setQuery(e.target.value)} required/>
                <GoSearch size={24} color='white'/>
                
            </form>
            <button onClick={()=>dispatch(setIsOpen(true))}>
                <RiMenu3Fill size={25} color='white'/>
            </button>
        </div>
    )
}

export default SearchBar
