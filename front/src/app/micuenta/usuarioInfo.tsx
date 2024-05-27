
import { IRegisteredUser } from '@/helpers/types/types';
import { useEffect, useState } from 'react'

function UsuarioInfo() {
    const [user, setUser] = useState<IRegisteredUser>();

    useEffect(()=>{
        const datos = localStorage.getItem('userSesion');
        if(datos){
            const { user } = JSON.parse(datos)
            setUser(user);           
        }
    },[])


    return (
        <div className='flex w-full h-[40vh] items-center justify-center my-5 border rounded p-3'>
            <div className='flex flex-col w-[30%] bg-gradient-to-r from-slate-400 to-lime-400 items-start justify-center p-4 rounded'>
                <div className='w-full flex  justify-between'>
                    <h2 className='font-bold'>Nombre: </h2>
                    <p>{user?.name}</p>
                </div>
                <div className='w-full flex  justify-between'>
                    <p className='font-bold'>email:</p>
                    <p>{user?.email}</p>
                </div>
                <div className='w-full flex  justify-between'>
                    <p className='font-bold'>Direccion:</p>
                    <p>{user?.address}</p>
                </div>
                
                <div className='w-full flex  justify-between'>
                    <p className='font-bold'>Teléfono:</p>
                    <p>{user?.phone}</p>
                </div>


            </div>
        </div>
    )
}

export default UsuarioInfo;