'use client'
import React, { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const [storageData, SetStorageData] = useState({
    token:"",
    user:{}
  });
  const [login, setlogin] = useState(false);
  const [focus, setFocus] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const localData = localStorage.getItem('userSesion');

      if(localData){
        SetStorageData(JSON.parse(localData))
        setlogin(true)
      }
    }
  },[path])
  
  const handleSerachChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFocus = ()=> {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };  
  const handleKeyEnter: KeyboardEventHandler<HTMLInputElement> = (event) =>{
    if(event.key === 'Enter'){
      router.push(`/p/busqueda/${searchValue}`);
    }
  };

  const handleSerach = () => {
    if(searchValue.trim()) router.push(`/p/busqueda/${searchValue}`);
  }

  const logoutHandler = () => {
    localStorage.removeItem('userSesion');
    setlogin(false)
    Swal.fire({
      title:"hasta pronto"
    })
    router.push('/');
  };

  return (
    <nav className='flex flex-col bg-slate-50'>
      <div className='flex justify-between items-center h-20'>
        
        {/* //!LOGO */}
        <div className='flex w-[150px] bg-slate-200 items-center justify-center'>
          <Link className='flex items-center justify-center' href='/'><img className=' p-4 w-[70%]' src="/img/Logo2.png" alt=""/></Link>
        </div>

        {/* //!BUSCADOR */}
        <div id='buscardor' className={`flex border rounded-md ${focus ? 'border-lime-400' : 'border-slate-200' }`}>
          <input  
            type="search" 
            name="search" 
            id="search " 
            onChange={handleSerachChange}
            onFocus={handleFocus} 
            onBlur={handleBlur}
            onKeyDown={handleKeyEnter}
            className='flex focus:ring-0 border-none rounded-l-md w-96 max-sm:w-48' 
          />
          
          <div className='flex p-1'>
            <div className='w-10 flex justify-center items-center bg-lime-400 rounded active:bg-slate-400' onClick={handleSerach}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941"/></svg>
            </div>
          </div>
        </div>

        {/* //! CARRITO - CUENTA */}
        <div className=' w-auto flex  items-center gap-3 mr-5'>
          {login ? <button onClick={logoutHandler} className='rounded border py-1 px-5 hover:bg-lime-400'>Log out</button> : <Link href='/login' className='rounded border py-1 px-5 hover:bg-lime-400'>Log in</Link>}
          <Link className=' text-black border rounded px-4 py-1 hover:bg-lime-400' href="/micuenta" >Mi Cuenta</Link>
          <Link href='/carrito'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
          </Link>
          
        </div>

      </div>

      {/* //! BARRA DE CATEGORIAS */}
      <div className='w-full items-center flex justify-start h-10 bg-lime-400  max-sm:hidden '>
        <ul className=' w-full gap-8 flex items-center justify-center'>
          {path != '/' && <li className=' w-20  rounded bg-slate-50 flex items-center justify-center hover:bg-slate-200'><Link href='/'>Home</Link></li>}
          <li className=' w-20 flex items-center justify-center '><Link href='/p'>Productos</Link></li>
          <li className=' w-20 flex items-center justify-center '><Link href="/p/catgory/2">Notebooks</Link></li>
          <li className=' w-20 flex items-center justify-center '><Link href="/p/catgory/3">Tablets</Link></li>
          <li className=' w-20 flex items-center justify-center '><Link href="/p/catgory/5">Deco Tvs</Link></li>
          <li className=' w-20 flex items-center justify-center '><Link href='/p/catgory/1'>Celulares</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;
