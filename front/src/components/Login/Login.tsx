import React, { useEffect, useState } from 'react';
import { validateLogin } from '@/helpers/validations';
import { IloginData } from '@/helpers/types/types';
import { useRouter } from 'next/navigation'; 
import Swal from 'sweetalert2';
import { LoginFetch } from '@/helpers/login.helper';

const Login = () => {
    const route = useRouter();
    
    const initialData = {
        email: "",
        password: "",
    }
    const [data, setData] = useState<IloginData>(initialData);
    const [errors, setErros] = useState(initialData);
    const [pwd, setpwd] = useState(true);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!data.email || !data.password){
            Swal.fire({
                title:"Ingresa todos los datos",
                icon:"error"
            })
            return
        }

        if(errors.email){
            Swal.fire({
                title:"Formato de mail invalido",
                icon:"error"
            })
            return
        }

        try {
            const res = await LoginFetch(data);
            console.log(res);
            
            if(res){
                Swal.fire({
                    title:"Bienvenido de nuevo",
                    icon: "success"
                })
                const {token, user } = res;
                localStorage.setItem("userSesion", JSON.stringify({token: token, user: user}))
                route.push('/');
                
            } 
        } catch (error) {
        Swal.fire({
            icon:"error",
            title:"Email o contraseña invalida",
            text:"verifica la información"
        })
        console.log()
        return;
            
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        
        setData({
            ...data,
            [name]:value
        })
    }
    
    const handlePwdView = () => {
        setpwd(!pwd);
    }

    useEffect(()=>{
        const liveErrors:IloginData = validateLogin(data)
        setErros(prevErrors => ({ ...prevErrors, ...liveErrors }));
    },[data])
    

    return (
        <div className='w-full h-[70vh] flex flex-col items-center justify-center my-5 bg-slate-200'>
            <div className='flex items-center justify-around w-[70%] h-[80%] rounded-xl bg-gradient-to-r from-slate-400 to-lime-400'>
                <div className='flex flex-col w-[500px] h-80 items-center justify-center rounded'>
                    <h1 className='font-bold'>Inicia Sesión</h1>
                    <p>y disfruta compando</p>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center xl:gap-2 mt-5'>
                        <input value={data.email}  type="text" name='email' placeholder='email' className={`rounded focus:ring-lime-600 focus:border-lime-500 ${errors.email ? 'focus:ring-red-700 focus:border-red-700': ''}`} onChange={changeHandler}/>

                        <div className='flex w-[91.5%] items-center justify-between  border border-solid border-slate-500 rounded bg-white '>
                            <input value={data.password} type={pwd ? 'password' : 'text'} name='password'  placeholder='contraseña' className='w-[90%] border-none rounded focus:ring-lime-600 focus:border-lime-500 ' onChange={changeHandler} />
                            {
                                pwd ? <svg xmlns="http://www.w3.org/2000/svg" className='' onClick={handlePwdView} width="1.5em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={handlePwdView} width="1.5em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l20.88 23c-37.28 21.9-53.23 57-53.92 58.57a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206a124.9 124.9 0 0 0 52.57-11.25l23 25.29a6 6 0 0 0 8.88-8.08Zm48.62 71.32l45 49.52a34 34 0 0 1-45-49.52M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.6 134.6 0 0 1 22.69 128c4.29-8.2 20.1-35.18 50-51.91l20.2 22.21a46 46 0 0 0 61.35 67.48l17.81 19.6A113.5 113.5 0 0 1 128 194m6.4-99.4a6 6 0 0 1 2.25-11.79a46.17 46.17 0 0 1 37.15 40.87a6 6 0 0 1-5.42 6.53h-.56a6 6 0 0 1-6-5.45A34.1 34.1 0 0 0 134.4 94.6m111.08 35.85c-.41.92-10.37 23-32.86 43.12a6 6 0 1 1-8-8.94A134.1 134.1 0 0 0 233.31 128a134.7 134.7 0 0 0-23.86-32.07C186.78 73.42 159.38 62 128 62a120 120 0 0 0-19.69 1.6a6 6 0 1 1-2-11.83A131 131 0 0 1 128 50c43.38 0 73 20.54 90.24 37.76c18.58 18.58 26.9 37 27.24 37.81a6 6 0 0 1 0 4.88"/></svg>
                            }
                        </div>

                        <button type='submit' className=' border px-[90px] py-2 hover:bg-white rounded'>Ingresar</button>

                    </form>

                </div>
                <div>
                    <img src="/img/Logo1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login