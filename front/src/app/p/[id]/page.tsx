'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { IProduct, IRegisteredUser } from '@/helpers/types/types';
import Swal from 'sweetalert2';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;



const ProductVieww = () => {
    const initialData = {
        id: 0,
        addres: "",
        credential: [], 
        email: "",
        name: "",
        phone: "",
        role: "",
        orders:[] as IProduct[]
        
    }
    const router = useRouter();
    const [descuento, setDescuento] = useState(false);
    const [tarjetas, setTarjetas] = useState(false);
    const [producto, setProducto] = useState<IProduct>({
        id:"",
        name:"",
        description:"",
        price:0,
        stock:0,
        image:"",
        categoryId:0
    });
    const [user, setUser] = useState<IRegisteredUser>();
    const pathname = usePathname();
    const {id} = useParams();
    
    const tjtHanlder = (e: any) => {
        e.preventDefault();
        setTarjetas(!tarjetas);
    }

    useEffect(()=>{
        const getProducto = async() =>{
            const data = await fetch(`${apiUrl}/products/${id}`,{
                cache: "no-cache"
            });
            const product = await data.json();
            setProducto(product);
        }
        const data = localStorage.getItem('userSesion');
        if(data){
            const {user} = JSON.parse(data)
            setUser(user);
        }
        getProducto();
    },[pathname]);

    const addHandler = () => {
        if(!user){
            Swal.fire({
                title: "Debes estar loggeado para comprar",
                text: "quieres Loguearte?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3edd2f",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login')
                }
            })
            return
        }
        const storedData = localStorage.getItem('carrito');
        const carrito = storedData ? JSON.parse(storedData) : [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        Swal.fire({
            title:"Producto añadido al carrito",
            icon:"success"
        })
    }

    return (
        <div className='flex flex-col p-5 w-full items-center justify-center'>
            <div className='flex w-full justify-evenly'>
                <div className='flex p-3 w-[500px]'>
                    <img className='shadow-black h-96' src={producto?.image} alt="" />
                </div>

                <div className='border border-gray-300 rounded p-5 flex h-[90%] w-[30%] flex-col justify-between px-10'>
                    <div className='flex flex-col gap-2 '>
                        <p className='font-bold'>Apple</p>
                        <h3 className=' font-bold'>{producto?.name}</h3>
                        <p className='text-[12px] w-72'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, provident sapiente. Exercitationem mollitia quidem itaque, deleniti magnam natus facilis blanditiis?</p>
                        {descuento}
                        <p className=' text-[40px]'>$ {producto?.price}</p>

                        <div>
                            <p></p>
                            <div></div>
                            <a className=' text-xs text-lime-900 hover:underline' href="#" onClick={tjtHanlder} ><p className=' text-lime-500'>Ver los medios de pago</p></a>
                        </div>
                    </div>


                    <div className='flex items-center justify-center border-t-[1px] pt-5 '>
                        <button className=' bg-lime-600 px-20 py-3 rounded hover:bg-lime-400 font-bold' onClick={addHandler}>Añadir Al Carrito</button>
                    </div>
                </div>
            </div>
            <section className='flex border-[1px] w-full items-center justify-center mt-5'>
                <div className='flex flex-col items-center justify-center my-5'>
                    <h2 className=' font-bold'>Caracteristicas</h2>
                    <p>{producto?.description}</p>
                </div>
                <div>

                </div>
            </section>


            {tarjetas == true && (
                        <div className='absolute top-[120px] right-0 backdrop-blur-sm bg-transparent w-full h-auto'>
                            <div className=' border-[1px] rounded border-slate-500 relative top-[10%] left-[20%] backdrop-blur-md w-[800px] h-[500px] bg-white'>
                                <a href="" onClick={tjtHanlder}><span className=' text-slate-500 hover:text-red-800 font-bold relative top-2 left-[770px]'>X</span></a>
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default ProductVieww;