import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { ValidateRegister } from '@/helpers/validations';
import { RegisterProps } from '@/helpers/types/types';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;



const Register: React.FC<RegisterProps>= ({ onSuccess }) => {
    const initialData = {
        name:"",
        email:"",
        password:"",
        address:"",
        phone:""
        
    }
    const [dataRegistro, setDataRegistro] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const router = useRouter();


    const submitHandler = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!dataRegistro.name || !dataRegistro.email || !dataRegistro.address || !dataRegistro.phone || !dataRegistro.password){
            Swal.fire({
                icon:"error",
                title:"Todos los campos deben ser completados",
                text:"Revisa el formulario"
            })
        }
        
        try {
            const res = await fetch(`${apiUrl}/users/register`,{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(dataRegistro)
            })
            if(res.ok){
                const data = await res.json();
                Swal.fire({
                    title:`Bienvenido ${data.name}`, 
                    text:'Loggeate para continuar'
                })
                router.push('/login')
                setDataRegistro(initialData);
                onSuccess();
            } 
        } catch (error) {
            Swal.fire({
                icon:"error",
                title:"Hubo un error al registrase",
                text:"intenta más tarde"
            })
            console.log(error)
            return;
        }
    };

    const changeHanlder = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setDataRegistro({
            ...dataRegistro, 
            [name]:value
        });

    };

    useEffect(()=>{
        const errores = ValidateRegister(dataRegistro);
        setErrors({
            ...errors, ...errores
        })
    },[dataRegistro]);


    return (
        <div className='flex items-center justify-center w-full h-[70vh] my-5 bg-slate-200'>
            <div className='flex items-center justify-around w-[70%] h-[80%] rounded-xl border bg-gradient-to-r from-lime-400 to-slate-400'>
                <div className='flex xl:w-auto xl:h-[450px] rounded'>
                    <img src="./img/Logo1.png" alt="" className='flex  rounded-l-md '/>
                </div>
                <div  className='flex flex-col xl:w-[500px] items-center justify-center rounded-r-md my-20 p-5'>
                    <h1 className=' font-bold mb-0'>Bienvenido a TecnoWorld</h1>
                    <p className=''>Registra tu cuenta</p>
                    <form onSubmit={submitHandler} className='flex flex-col xl:gap-2 mt-5'>
                        {errors.name && dataRegistro.name.trim() && <span className=' text-red-600 text-xs'>{errors.name}</span>}
                        <input className={`rounded ${errors.name && dataRegistro.name.trim() ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-lime-600 focus:border-lime-500'} `} value={dataRegistro.name} type="text" name="name" id="" placeholder='nombre' onChange={changeHanlder}/>

                        {errors.email && dataRegistro.email.trim() && <span className=' text-red-600 text-xs'>{errors.email}</span>}
                        <input  className={`rounded ${errors.email && dataRegistro.email.trim() ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-lime-600 focus:border-lime-500'} `} value={dataRegistro.email} type="text" name='email' placeholder='Email' onChange={changeHanlder} />

                        {errors.phone && dataRegistro.phone.trim() && <span className=' text-red-600 text-xs'>{errors.phone}</span>}
                        <input className={`rounded ${errors.phone && dataRegistro.phone.trim() ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-lime-600 focus:border-lime-500'} `} value={dataRegistro.phone} type='text' name='phone' placeholder='Teléfono' onChange={changeHanlder}/>

                        {errors.address && dataRegistro.address.trim() && <span className=' text-red-600 text-xs'>{errors.address}</span>}
                        <input className={`rounded ${errors.address && dataRegistro.address.trim() ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-lime-600 focus:border-lime-500'} `} value={dataRegistro.address} type="text" name='address' placeholder='Dirección' onChange={changeHanlder} />
                        
                        {errors.password && dataRegistro.password.trim() && <span className=' text-red-600 text-xs h-auto max-w-[272px]'>{errors.password}</span>}
                        <input className={`rounded ${errors.password && dataRegistro.password.trim() ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-lime-600 focus:border-lime-500'} `} value={dataRegistro.password} type="password" name='password' placeholder='Password' onChange={changeHanlder} />

                        
                        <button type="submit" className='border px-[90px] py-2 rounded hover:bg-white font-bold'>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;