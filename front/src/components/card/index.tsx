'use client'
import React, { useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


//types//
import { CardsProps, IProduct } from "../../helpers/types/types";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const Card : React.FC <CardsProps> = ({id, image, name, price}) => {
    const [product, setProduct] = useState<IProduct>()
    const router = useRouter();


    const getProduct = async(id: number) => {
        try {
            const dataProduct = await fetch(`${apiUrl}/products/${id}`);
            const product =await dataProduct.json();
            console.log(product);
            setProduct(product);
            
        } catch (error) {
            Swal.fire({
                icon:"error",
                title:"hubo un error",
                text:"no pudimos procesar tu pedido"
            })
            console.log(error);
        }
    }

    const handleAdd = async() => {
        await getProduct(Number(id));

        const dataUser = localStorage.getItem('userSesion');
        if(dataUser){
            const dataCarrito = localStorage.getItem('carrito')
            const carrito = dataCarrito ? JSON.parse(dataCarrito) : [];
            carrito.push(product);
            localStorage.setItem('carrito',JSON.stringify(carrito));
            Swal.fire({ 
                icon:"success",
                title:"Producto agregado al carrito"
            })
        }else{
            Swal.fire({
                icon:"info",
                text:"Debes logearte primero"
            })
            router.push('/login');
        }
    }

    
    
    return (
        <div className="flex flex-col xl:w-60 xl:h-96 xl:justify-around w-72 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100">
                <Link href={`/p/${id}`}  >
                
                <img className="xl:p-8 xl:h-64 rounded-lg"  alt="product image" src={image} />
                
                <div className="px-5 pb-5">
                    
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    
                    {/* <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div> */}
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                    </div>
                </div>

                </Link>
                    <div className="flex justify-center items-center px-3 py-1 bg-lime-400">
                        <button onClick={handleAdd}>Agregar al carrito</button>
                    </div>
            </div>
    )
};

export default Card;