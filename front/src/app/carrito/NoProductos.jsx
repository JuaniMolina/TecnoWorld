import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NoProductos = () => {
  const pathname =usePathname();
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
        <h1>No tienes productos en el Carrito</h1>
        {
          pathname === '/micuenta' && (
            <Link href='/p'><button className='border py-1 px-3 rounded bg-lime-400 hover:bg-lime-600'>Productos</button></Link>
          )
        }
        
    </div>
  )
}

export default NoProductos