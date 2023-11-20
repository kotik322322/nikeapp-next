"use client"

import Container from '@/components/Container'
import React from 'react'
import { data } from '@/constants/data'
import Item from '@/components/Item'
// import { usePathname } from 'next/navigation'

// const getProducts = async () => {
//   const res = await fetch("")
// }

const Products = () => {

  return (
    <Container className='mt-20'>
      <span>Products Page</span>

      {
        data?.map(item => (
          <Item item={item}/>
        ))
      }
    </Container>
  )
}

export default Products