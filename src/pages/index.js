import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Products from '@/components/Products'
import { useContext, useEffect, useState } from 'react'
import { makeServer } from '@/api/server'
import { getProducts } from '@/api/actions'
import BestSellers from '@/components/BestSellers'
import { AppContext } from '@/context/Context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])
  const [listFavorites, setListFavorites] = useState([])

  let { filterText, filterFavorite, setFilterFavorite } = useContext(AppContext)

  useEffect(() => {
      makeServer()

      const fetchData = async () => {
        let data = await getProducts()
        let prod = data.products
        setProducts(prod)
      }

      const FilterData = async () => {
        let filteredData = products.filter((product) => {
          return (
            product.name && product.name.toLowerCase().includes(filterText)
          )
        })
        setResults(filteredData)
      }
      FilterData()

      const handleFavorite = async () => {
        if (filterFavorite == true) {
          let favorites = products.filter((product) => {
            return (
              product.favorite === true
            )
          })
          setFilterFavorite(true)
          setProducts(favorites)
          console.log(products)
        } else {
          fetchData()
        }
      }
      handleFavorite()
      
      }, [filterText, filterFavorite])

  return (
    <>
    <main className={`${inter.className}`}>
      <Header/>
      <div className='flex justify-between'>
        <Products items={results ? products : results} />
      </div>
    </main>
    </>
  )
}
