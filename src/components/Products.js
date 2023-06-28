import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Heart } from './icons/Heart'
import { FullHeart } from './icons/FullHeart'
import { ArrowLeft } from './icons/ArrowLeft'
import { ArrowRight } from './icons/ArrowRight'
import { paginate } from '@/services/Pagination'

export default function Products(props) {
    const [favorite, setFavorite] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);

    const { items } = props
    const pageSize = 5;
    const paginatedPosts = paginate(items, currentPage, pageSize);
    const pagesCount = Math.ceil(items.length / pageSize); // 100/10

    const onClickFavorite = (id) => {
        let newId = id - 1
    }

    const onClickNext = () => {
      if (currentPage >= pagesCount ) {
         setCurrentPage(pagesCount)
       } else {
         setCurrentPage(currentPage + 1)
       }
     }

     const onClickFoward = () => {
       if (currentPage <= 1 ) {
          setCurrentPage(1)
        } else {
          setCurrentPage(currentPage - 1)
        }
      }

    return (
        <section className='px-[2%] max-w-[883px] bg-white flex-1 pt-12'>
            {/*PRODUCTS TABLE*/}
            <div className='flex justify-between'>
            <h1>Todos os produtos</h1>

            <div className='flex gap-4'>
                <button onClick={onClickFoward}>
                    <ArrowLeft />
                </button>

                <button onClick={onClickNext}>
                    <ArrowRight />
                </button>
            </div>

            </div>

            <div className='p-12 bg-[#F3F5F9] text-[#99A0B0] rounded-2xl my-12'>
            <table className='w-full'>

            {/*TABLE HEADER*/}
            <thead className=''>
            <tr className='text-left border-black border-opacity-10 border-b-2 [&>th]:uppercase [&>th]:flex-row [&>th]:pb-7'>
                <th>Identification</th>
                <th>Price</th>
                <th className='hidden sm:table-cell'>Sales</th>
                <th className='hidden sm:table-cell'>Stock</th>
                <th></th>
            </tr>
            </thead>

            {/*TABLE ITEMS*/}
            <tbody>
            {paginatedPosts?.map((product) => (
            <tr key={product.id} className='h-full [&>td]:border-b'>
                {/* IDENTIFICATION */}
                <td className='flex gap-1 items-center py-8'>
                    <Image
                        src={product.image}
                        width={85}
                        height={85}
                        className='hidden sm:block'
                        alt={product.name}
                    />
                    <div className='flex flex-col ml-12'>
                        <strong className='text-[#235EE7]'>{product.name}</strong>
                        <strong className='text-[#6B7183]'>#{product.code}</strong>
                    </div>
                </td>
                {/* PRICE */}
                <td className=''>
                    R$ {Number(product.price).toFixed(2)}
                </td>
                {/* SALES */}
                <td className='hidden sm:table-cell'>
                    <strong>Total de {product.sales * product.price}</strong>
                    <p>{product.sales} vendas</p>
                </td>
                {/* STOCK */}
                <td className='hidden sm:table-cell'>
                    {product.stock} und
                </td>
                {/* FAVORITE */}
                <td>
                    <button onClick={() => onClickFavorite(id, favorite)}>
                        {product.favorite ? <FullHeart /> : <Heart />}
                    </button>
                </td>
            </tr>
            ))}
            </tbody>
            </table>

            <p className='flex right-0'>Página {currentPage} de {pagesCount}</p>
            </div>

        </section>
    )
}
