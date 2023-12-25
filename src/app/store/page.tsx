"use client"
import React, { useEffect, useState } from 'react'
import data from '../../../public/data.json'
import StoreItems from '@/components/StoreItems/StoreItems';

const Store = () => {
  const [items, setItems] = useState(data);
  useEffect(() => {
    console.log(items);
  },[items])
  return (
    <main>
      <h1>Store</h1>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {items && items.map(item => (
                <StoreItems key={item.id} data={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Store