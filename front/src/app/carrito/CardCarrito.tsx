import React from 'react'
import {IProduct} from '../../helpers/types/types'
import Swal from 'sweetalert2'
import { ICarritoProps } from '../../helpers/types/types'
import { deleteHanlder, removeProductFromCart } from '@/helpers/Carrito.helper'

const CardCarrito: React.FC<ICarritoProps & { onDelete: () => void }> = ({ name, image, price, id, onDelete }) => {
    const handleClick = () => {
        deleteHanlder(onDelete, id);
    }

    return (
        <div>
            <div className='flex flex-col border-t-[1px] w-full'>
                <div className='flex justify-between'>
                    <div className='flex '>
                        <div className='p-2 shadow-md m-2'>
                            <img src={image} alt="Imagen" className='w-[150px]'/>
                        </div>

                        <div className='flex flex-col justify-center ml-4 items-start justify-self-start'>
                            <p>{name}</p>
                            <button className=' self-start text-lime-400 font-bold hover:text-lime-600' onClick={handleClick} >Eliminar</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                    $ {price}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardCarrito