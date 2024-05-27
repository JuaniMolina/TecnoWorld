import React from 'react';
import Link from 'next/link';

const SideBar: React.FC = () => {

    return (
        <aside className='flex w-full h-full bg-slate-200 m-2 p-4 rounded shadow-sm shadow-black'>
            <div className='flex w-full h-full justify-center items-center'>
                <ul>
                    <li className='my-4 '><p className='font-bold'>Precio</p>
                        <ul className=' text-xs'>
                            <Link className=' hover:underline' href='#'><li className='mt-1'>Menos de $ 25.000</li></Link>
                            <Link className=' hover:underline' href='#'><li className='mt-1'>$ 25.000 a $ 50.000</li></Link>
                            <Link className=' hover:underline' href='#'><li className='mt-1'>$50.000 o más</li></Link>
                            <li className='my-1'>
                                <div>
                                    <input className='rounded focus:border-none text-xs h-6 w-12' type="text" />
                                    <span className='mx-2'>-</span>
                                    <input className='rounded focus:border-none text-xs h-6 w-12' type="text" />
                                    <button className='ml-1'>Ir</button>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className='my-4'><p className=' font-bold'>Tipo de Entrega</p>
                        <ul className=' text-xs'>
                            <Link className='hover:underline' href='#'><li className='mt-1'><p>Entrega a Domicilio</p></li></Link>
                            <Link className='hover:underline' href='#'><li className='mt-1'><p>Retiro en sucursal</p></li></Link>
                            
                        </ul>
                    </li>

                    <li className='my-4'><p className=' font-bold'>Formas de Pago</p>
                        <ul className=' text-xs'>
                            <div className='flex items-center justify-center gap-1'>
                                <input type="checkbox" className='checked:bg-lime-400 focus:ring-0 focus:border-none' /><Link className='hover:underline flex items-center justify-center' href='#'><li className=''><p>3 cuotas sin interés</p></li></Link> 
                            </div>

                            <div className='flex items-center justify-center gap-1 mt-1'>
                                <input type="checkbox" className='checked:bg-lime-400 focus:ring-0 focus:border-none' /><Link className='hover:underline flex items-center justify-center' href='#'><li className=''><p>6 cuotas sin interés</p></li></Link> 
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar