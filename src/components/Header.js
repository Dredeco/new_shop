import { getProducts } from '@/api/actions'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header( {setResults} ) {
  const [input, setInput] = useState("")

    function handleChange(value) {
        setInput(value.toLowerCase())
        fetchData(value.toLowerCase())
    }

    const fetchData = async (value) => {
      let data = await getProducts()
      let {products} = data
        const results = products.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      }

  return (
    <header className='flex justify-around p-4 bg-blue-600'>
      <Link href='/'>
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
