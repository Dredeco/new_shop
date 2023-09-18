import { getProducts } from '@/api/actions'
import { AppContext } from '@/context/Context'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

export default function Header() {

  let { filterText, setFilterText, filterFavorite, setFilterFavorite } = useContext(AppContext)

    function handleChange(value) {
      setFilterText(value)
    }

    const handleFavorite = () => {
      return setFilterFavorite(!filterFavorite)
    }

  return (
    <header className='flex justify-around p-4 bg-blue-600'>
      <Link href='#'>
        <p className='text-white'>Logomarca</p>
      </Link>
        <input 
          type='text' 
          id='search' 
          className='border-2'
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={handleFavorite}>Favoritos</button>
    </header>
  )
}
