'use client'
import React, { useEffect, useState } from 'react'
import NoProductos from '../carrito/NoProductos';
import CardCarrito from '../carrito/CardCarrito';
import { IProduct } from '@/helpers/types/types';

function Carrito() {
    const [carrito, setCarrito] = useState<IProduct[]>([])
    const [estado, setEstado] = useState<boolean>(false);
    useEffect(()=>{
        const data = localStorage.getItem('carrito');
        if(data){
            setCarrito(JSON.parse(data));
        }
    },[estado])

    const actualizarCarrito = () => {
        setEstado(!estado);
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-[40vh] gap-2 my-2'>
            {
                carrito.length == 0 ? <NoProductos /> : 
                (carrito.map((producto) => 
                    <div className='flex flex-col rounded justify-between w-[70%] bg-gradient-to-r from-slate-400 to-lime-400 p-5'>
                        <CardCarrito key={producto.id} name={producto.name} image={producto.image} price={producto.price} id={producto.id} onDelete={actualizarCarrito}/>
                    </div>
                )) 
                
            }
        </div>
    )
}

export default Carrito;