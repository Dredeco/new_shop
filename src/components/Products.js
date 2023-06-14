import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import HeartIcon from './icons/HeartIcon'
import HeartIconSolid from './icons/HeartIconSolid'
import Link from 'next/link'

export default function Products(props) {
    const { items } = props
    let [favorite, setFavorite] = useState(true)

    const onClickFavorite = (id) => {
        let newId = id - 1

    }

    return (
        <section className='px-[2%] bg-white'>
            {/*PRODUCTS TABLE*/}
            <table className='w-full'>

                {/*TABLE HEADER*/}
                <thead>
                <tr className='text-left border-slate-400 border-b-2 [&>th]:uppercase'>
                    <th>Identification</th>
                    <th>Price</th>
                    <th className='hidden sm:table-cell'>Sales</th>
                    <th className='hidden sm:table-cell'>Stock</th>
                    <th></th>
                </tr>
                </thead>

                {/*TABLE ITEMS*/}
                <tbody>
                {items?.map((product) => (
                <tr key={product.id} className='[&>td]:bg-slate-100 h-full'>
                    {/* IDENTIFICATION */}
                    <td className='flex gap-1 items-center'>
                        <Image
                            src={product.image}
                            width={100}
                            height={50}
                            className='hidden sm:block'
                            alt={product.name}
                        />
                        <div className=''>
                            <p>{product.name}</p>
                            <p>{product.code}</p>
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
                        <a onClick={() => onClickFavorite(id, favorite)}>
                            {product.favorite ? <HeartIconSolid /> : <HeartIcon />}
                        </a>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
