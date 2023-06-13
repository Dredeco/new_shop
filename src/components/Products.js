import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import HeartIcon from './icons/HeartIcon'
import HeartIconSolid from './icons/HeartIconSolid'

export default function Products(props) {
    const { items } = props

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
                {items.map((item) => (
                <tr key={item.id} className='[&>td]:bg-slate-100 h-full'>
                    {/* IDENTIFICATION */}
                    <td className='flex gap-1 items-center'>
                        <Image
                            src={item.image}
                            width={100}
                            height={50}
                            className='hidden sm:block'
                            alt={item.name}
                        />
                        <div className=''>
                            <p>{item.name}</p>
                            <p>{item.code}</p>
                        </div>
                    </td>
                    {/* PRICE */}
                    <td className=''>
                        R$ {Number(item.price).toFixed(2)}
                    </td>
                    {/* SALES */}
                    <td className='hidden sm:table-cell'>
                        <strong>Total de {item.sales * item.price}</strong>
                        <p>{item.sales} vendas</p>
                    </td>
                    {/* STOCK */}
                    <td className='hidden sm:table-cell'>
                        {item.stock} und
                    </td>
                    {/* FAVORITE */}
                    <td>
                        {item.favorite ? <HeartIconSolid /> : <HeartIcon />}
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
