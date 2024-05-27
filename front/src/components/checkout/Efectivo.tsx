import React from 'react'

function Efectivo() {
  return (
    <div>
        <h1 className='font-bold'>EFECTIVO</h1>
        <p> Paga en efectivo en Nuestra sucursal o en cualquier rapipago del pais</p>
        <div className='flex justify-around my-3'>
          <img src="https://nuvei.com/wp-content/uploads/2021/06/pago-facil.png" alt="" className='w-[150px]' />
          <img src="https://logowik.com/content/uploads/images/western-union2109.jpg" alt="" className='w-[150px]'/>
          <img src="https://www.adlatina.com/uploads/img/211201035727_rapipago-logo.jpg" alt="" className='w-[200px]'/>

        </div>
    </div>
  )
}

export default Efectivo