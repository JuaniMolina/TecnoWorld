import React from 'react'

function DebCred() {
  return (
    <div className='my-5'>
        <form action="" className='flex flex-col gap-1'>
            <select name="" id="" className='rounded focus:ring-lime-400 focus:border-lime-400'>
                <option value="">
                  Visa
                  <img src="https://c0.klipartz.com/pngpicture/996/264/sticker-png-credit-card-visa-logo-mastercard-credit-card-blue-text-rectangle-payment-logo.png" alt="" />
                  </option>
                <option value="">Master</option>
                <option value="">American Express</option>
            </select>
            <input className='rounded focus:ring-lime-400 focus:border-lime-400' type="text" name="" id="" placeholder='Numero de tarjeta' />
            <input className='rounded focus:ring-lime-400 focus:border-lime-400' type="text" placeholder='Nombre completo del titular'/>
            <div className='flex justify-around gap-1'>
                <input className='rounded focus:ring-lime-400 focus:border-lime-400' type="text" placeholder='XX/XXXX - Vencimiento' />
                <input className='rounded focus:ring-lime-400 focus:border-lime-400' type="text" placeholder='CCV' />
            </div>
        </form>
    </div>
  )
}


export default DebCred