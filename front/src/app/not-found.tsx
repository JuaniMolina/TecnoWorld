import Link from 'next/link';
import React from 'react';


const NotFound = () => {
  return (
    <div className='w-full h-[70vh] flex items-center justify-center'>
      <div className='flex h-[70%] items-center justify-center gap-2 bg-slate-100 rounded p-5'>
        <div>
          <img src="https://i.pinimg.com/564x/02/6d/8e/026d8ed8f86c52268cc5e99100fd8a58.jpg" alt="imagen" />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className=' text-[100px] font-bold'>404</p>
          <p className=' font-semibold'>pagina no encontrada</p>
          <button className='py-1 px-3 bg-lime-400 mt-5 rounded hover:bg-lime-600'><Link href='/'>Volver al Home </Link></button>
        </div>
      </div>
    </div>
  )
}

export default NotFound