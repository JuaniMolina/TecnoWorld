'use client'
import { fetchOrders } from '@/helpers/products.helper';
import { IOrder } from '@/helpers/types/types';
import React, { useEffect, useState } from 'react'



const Ordenes = () => {
    const [token, setToken] =useState();
    const [orders, setOrders] = useState<IOrder[]>([]);
    

    useEffect(()=>{
        const data = localStorage.getItem('userSesion');
        if(data){
            const userdata = JSON.parse(data);
            const { token } = userdata;
            setToken(token);
        }

        async function getData(){
            try {
                const response = await fetchOrders(token!);
                setOrders(response!);
            } catch (error) {
                console.log(error)
            }
        }
        
        token && getData();
    },[token])

    return (
        <div className=' flex flex-col my-5 w-full min-h-[300px] items-center'>
            {orders.length != 0  ?
                orders?.map((order, index) => (
                    <div key={index} className='flex flex-col items-center justify-center border rounded w-[500px] p-3 my-2 gap-2 bg-slate-100'>
                        <p>Numero de Orden: {order.id}</p>
                        <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                        <ul className='flex flex-col w-fit items-center border rounded bg-gradient-to-r from-slate-400 to-lime-400 p-5'>
                            {order.products.map((product, index) => (
                                <li key={index} className=' w-96 flex gap-1 my-1 items-center justify-between'>
                                    <img src={product.image} alt="" className='w-[30px]'/>
                                    <p>{product.name}</p>
                                    <p>$ {product.price}</p>
                                
                                </li>
                            ))}
                        </ul> 
                    </div>
                )) :
                (
                    <div className='flex flex-col items-center justify-center h-full w-full gap-2'>
                        <h2 className='font-bold'>Todavia no has realizado una compra</h2>
                        <p>Aquí veras todas las compras que realices</p>
                    </div>
                )
            }
        </div>
    );
    
}

export default Ordenes;