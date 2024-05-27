import React from 'react';
import { Carrusel } from './Carrousel';
import Images from './Images';
import ProductsCategories from './ProductsCategories';
import Promos from './Promos'

function Landing() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center'>
        <Carrusel />
        <Images/>
        <ProductsCategories/>
        <Promos />
    </div>
  )
}

export default Landing