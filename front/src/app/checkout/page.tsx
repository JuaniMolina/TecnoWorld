'use client'
import React from 'react'
import Payment from '../../components/checkout/payment'
import { useRouter } from 'next/navigation';

const CheckOut = () => {
  const carrito = localStorage.getItem('carrito');
  
  if(carrito === '[]') useRouter().push('/carrito');
  return (
    <div>
        <Payment />
    </div>
  )
}

export default CheckOut