import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Products from '@/components/Products'
import { useEffect, useState } from 'react'
import { makeServer } from '@/api/server'
import { getProducts } from '@/api/actions'
import BestSellers from '@/components/BestSellers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
      makeServer()
      const fetchData = async () => {
        let data = await getProducts()
        let prod = data.products
        setProducts(prod)
      }
      fetchData()
      console.log(products)
      }, [])

  return (
    <>
    <main className={`${inter.className}`}>
      <Header setResults={setResults}/>
      <div className='flex justify-between'>
      <Products items={results == '' ? products : results} />
      </div>
    </main>
    </>
  )
}
