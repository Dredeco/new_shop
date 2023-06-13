import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Products from '@/components/Products'
import { useEffect, useState } from 'react'
import { makeServer } from '@/api/server'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
      makeServer()
      fetch("/api/products")
          .then((response) => response.json())
          .then((json) => setProducts(json))
      }, [])

  return (
    <>
    <main className={`${inter.className}`}>
      <Header setResults={setResults}/>
      <Products items={results == "" ? products : results} />
    </main>
    </>
  )
}
