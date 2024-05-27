'use client'
import { IProduct, IRegisteredUser } from '@/helpers/types/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import CardCarrito from './CardCarrito'
import NoProductos from './NoProductos'
import Link from 'next/link'
import { sumarPrecios } from '@/helpers/Carrito.helper'

const Carrito = () => {
  const router = useRouter();
  const initialData = {
    id: 0,
    address: "",
    credential: [], 
    email: "",
    name: "",
    phone: "",
    role: "",
    orders:[]}

  const [usuario, setUser] = useState<IRegisteredUser>(initialData);
  const [carrito, setCarrito] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [estado, setEstado] = useState<boolean>(false);

  useEffect(()=>{
    const data = localStorage.getItem('userSesion');
    const dataCarrito = localStorage.getItem('carrito');
    if(dataCarrito){
      setCarrito(JSON.parse(dataCarrito));
    }

    if(!data){
      Swal.fire({
        title: 'Primero tienes que Iniciar Sesion',
        icon:"info"
      })
      router.push('/login')
    }
    if(data){
      const paseo = JSON.parse(data)
      setUser(paseo.user);
      
    }
  },[estado])

  

  useEffect(()=>{
    const total = sumarPrecios(carrito);
    if(total != 0 ){
      setTotal(total);
    }else{
      setTotal(0);
    }
  },[carrito])

  const finishOrderHandler = () => {
    if(carrito.length === 0) return;
  }

  const actualizarCarrito = () => {
    setEstado(!estado);
}

  return (
    <div className='flex w-full min-h-[50vh] justify-around p-10'>
      <div className='w-[60%] h-full flex flex-col gap-2'>
        <h1 className=' justify-self-center self-center font-bold'>Carrito</h1>
        {
          carrito.length != 0 ? (carrito.map((producto) => 
            <CardCarrito key={producto.id} name={producto.name} image={producto.image} price={producto.price} id={producto.id} onDelete={actualizarCarrito}/>
          )) : (<NoProductos />)
        }
      </div>

      <div className='flex flex-col w-[20%] p-3 h-fit  bg-slate-100'>

        <div className='flex flex-col gap-1'>
          <p className=' text-sm'>Subtotal $ {total}</p>
          <h2 className=' font-bold text-xl'>Total $ {total}</h2>
        </div>

        <div className='flex flex-col mt-3 border-t-[1px] gap-2'>
          <button className={`px-12  xl:h-12 text-xs bg-lime-400 hover:bg-lime-600 font-bold ${carrito.length === 0 && 'bg-slate-400 hover:bg-slate-400'}`} disabled={carrito.length === 0} onClick={finishOrderHandler}>{carrito.length != 0 ? <Link href='/checkout'>Finalizar Compra</Link> : 'Finalizar Compra'}</button>
          <button className='px-5 xl:h-12 border-lime-400 border-[1px] hover:bg-lime-400 text-xs bg-slate-200 font-bold '><Link href={'/p'}>Continuar compando</Link></button>
        </div>
        
      </div>
    </div>
  )
}

export default Carrito;