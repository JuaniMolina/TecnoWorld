'use client'
import React, { useEffect, useState } from 'react';
import Efectivo from './Efectivo';
import DebCred from './DebCred';
import { IProduct } from '@/helpers/types/types';
import { IRegisteredUser } from '@/helpers/types/types';
import Swal from 'sweetalert2';
import { obtenerIds, sendOrder, sumarPrecios } from '@/helpers/paymentHelper';
import { useRouter } from 'next/navigation';

  

function Payment(){
  const router = useRouter();
  const[selectedPayment, setSelectPayment] = useState('Efectivo');
  const [selectedOption, setSelectedOption] = useState<String>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [ user, setUser] = useState<IRegisteredUser>();
  const [token, setToken] = useState<string>('')

  useEffect(()=>{
    const res = localStorage.getItem('userSesion');
    if(res){
      const userdata = JSON.parse(res);
      setUser(userdata.user);
      setToken(userdata.token)
    }
    const data = localStorage.getItem('carrito');
    if(data){
      const products = JSON.parse(data);
      setProducts(products);
    }

  },[])

  const handlePaymentChange = (paymenMethod: string) => {
    setSelectPayment(paymenMethod);
  }

  const PaymentMethod : { [key:string]: JSX.Element} = {
    Efectivo: <Efectivo />,
    Débito: <DebCred /> ,
    Crédito: <DebCred />
  }

  const handleCheckBoxChange = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption('');
    } else {
      setSelectedOption(option);
    }
  };


  const total = sumarPrecios(products)

  const submitHandler = async() =>{
    const productsId :number[] = obtenerIds(products)
    const res = await sendOrder(productsId , token);

    if(res == 200){
      Swal.fire({
        icon:"success",
        title: "Compra confirmada",
        text:"Gracias por su compra"
      })
      localStorage.removeItem('carrito');
      router.push('/');
    }else{
      Swal.fire({
        icon:"error",
        title:"Tuvimos un Problema al procesar tu compra",
        text:"Intentalo mas tarde"
      })
    }
  }

  return (
    <div className='flex flex-col justify-center items-center my-2'>

        <div className='my-3'>
          <h1>Revisa toda la informacion</h1>
        </div>


        <div className=' border flex flex-col gap-2 items-center justify-center p-5 xl:w-[50%] rounded'>
          <h1 className='font-bold'>Formas de Pago</h1>
          <div className="flex p-4 gap-3">
            <div className=' flex flex-col items-center justify-evenly w-20 border p-5 rounded bg-slate-200 hover:bg-lime-300 gap-1'>
              <img
                src="img/efectivo.png"
                alt="Efectivo"
                className='w-20'
                onClick={() => handlePaymentChange('Efectivo')}
              />
              <span className='text-xs'>efectivo</span>
            </div>
            <div className=' flex flex-col items-center justify-evenly w-20 border p-5 rounded bg-slate-200 hover:bg-lime-300 gap-1'>
              <img
                src="img/debito.png"
                alt="Débito"
                className='w-20'
                onClick={() => handlePaymentChange('Débito')}
              />
              <span className='text-xs'>Débito</span>
            </div>
            <div className=' flex flex-col items-center justify-evenly w-20 border p-5 rounded bg-slate-200 hover:bg-lime-300 gap-1'>
              <img
                src="img/credit.png"
                alt="Débito"
                className='w-20'
                onClick={() => handlePaymentChange('Débito')}
              />
              <span className='text-xs'>Crédito</span>
            </div>
        </div>
          {PaymentMethod[selectedPayment]}
        </div>


        <div className='flex flex-col items-center my-4 border p-4 w-[50%] rounded bg-slate-200 gap-1'>
          <h1 className='font-bold'>Formas de Envío</h1>
          <div className='flex gap-5'>
            <div className='flex  items-center gap-1 py-1 px-2 bg-lime-300 rounded'>
              <input className='active:outline-slate-400 checked:bg-slate-400 checked:outline-slate-400' type="checkbox" name="domicilio" id="domicilio" checked={selectedOption === 'domicilio'} onChange={() => handleCheckBoxChange('domicilio')}/>
              <label htmlFor="domicilio">Envío a Domicilio</label>
            </div>
            <div className='flex  items-center gap-1 py-1 px-2 bg-lime-300 rounded'>
              <input className='active:outline-slate-400 checked:bg-slate-400 checked:outline-slate-400' type="checkbox" name="retiro" id="retiro" checked={selectedOption === 'retiro'} onChange={() => handleCheckBoxChange('retiro')}/>
              <label htmlFor="retiro">Retiro en Sucursal</label>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center border rounded  w-[50%] mb-4 p-4 gap-2'>
          <h1 className='font-bold'>Datos Usuario</h1>
          <div className='flex justify-around w-full'>
            <p>Nombre: {user?.name}</p> 
            <p>Email: {user?.email}</p>
            <p>Dirección: {user?.address}</p>
          </div>
        </div>


        <div className='flex flex-col items-center justify-center w-[50%] border rounded p-4'>
          <h1 className='font-bold text-xl'>Resumen</h1>
          <div className='w-full'>
            {products?.map((product)=>{
              return (
                <div key={product.id} className='flex w-full justify-between items-center'>
                    <img src={product.image} alt={product.name} className='w-[100px]' />
                    <p>{product.name}</p>
                    <p>$ {product.price} -.</p>

                </div>
                )
            })}
            <div className='flex w-full justify-end gap-3'>
              <h1 className='font-bold text-'>Total</h1>
              <p> ${total}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-[50%] border roounded my-2 p-4 bg-slate-200'>
          <button className='bg-lime-400 py-1 px-5 rounded hover:bg-lime-600' onClick={submitHandler}>Confirmar Compra</button>
        </div>
        
    </div>
  )
}

export default Payment;