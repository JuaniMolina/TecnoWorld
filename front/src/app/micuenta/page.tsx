'use client'
import React, { useEffect, useState } from 'react';
import Ordenes from './Ordenes';
import UsuarioInfo from './usuarioInfo';
import Carrito from './carrito';
import { IRegisteredUser } from '@/helpers/types/types';
import {  useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function SideBar() {
  const [selectedOption, setSelectedOption] = useState('Mis Datos');
  const [user, setUser] = useState<IRegisteredUser>();
  const router = useRouter()


  useEffect(()=>{
    const data = localStorage.getItem('userSesion');
    if(data){
      const { user } = JSON.parse(data)
      setUser(user);
    }else{
      Swal.fire({
        icon:"error",
        text:"Logueate para continuar"
      })
      router.push('/login')
    }
  },[])
  
  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Mis Datos':
        return <UsuarioInfo />;
      case 'Carrito':
        return <Carrito />;
      case 'Mis Ordenes':
        return <Ordenes />;
      default:
        return null;
    }
  };


  return (
    <div className='flex flex-col h-full rounded m-2 items-center justify-center '>
      <aside className='flex w-full bg-slate-200'>
        <ul className='w-full flex p-3 xl:gap-3 border'>
          <li className='hover:cursor-pointer hover:bg-lime-200 rounded xl:py-1 xl:px-8' onClick={() => handleOptionClick('Mis Datos')} >Mis Datos</li>
          <li className='hover:cursor-pointer hover:bg-lime-200 rounded xl:py-1 xl:px-8' onClick={() => handleOptionClick('Carrito')} >Carrito</li>
          <li className='hover:cursor-pointer hover:bg-lime-200 rounded xl:py-1 xl:px-8' onClick={() => handleOptionClick('Mis Ordenes')}>Historial de Ordenes</li>
        </ul>
      </aside>
      
      <section className='w-full h-full'>
        {renderContent()}
      </section>
    </div>
  )
}

export default SideBar;