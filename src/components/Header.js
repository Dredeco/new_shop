import Link from 'next/link'
import React, { useState } from 'react'

export default function Header( {setResults} ) {
  const [input, setInput] = useState("")

    function handleChange(value) {
        setInput(value)
        fetchData(value)
    }

    const fetchData = (value) => {
      fetch("api/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
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
    </header>
  )
}