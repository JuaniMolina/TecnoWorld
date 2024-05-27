import React from 'react' 

function Promos() {
  return (
    <div className='box-content flex items-center justify-center w-[90%] h-full my-4 gap-4 mt-5 '>
        <div className='flex flex-col rounded border p-2 sm:p-4 w-auto h-full min-h-[165px]'>
            <img className=' min-h-[126px] min-w-[113px] md:w-[350px] md:h-[350px]' src="https://i.pinimg.com/564x/87/b1/5f/87b15fe52fe01284695082cabc116013.jpg" alt="" />
            <p className=' text-xs mt-1'>Descripcion</p>
        </div>
        <div className='flex flex-col r min-h-[165px]ounded border p-2 sm:p-4 w-auto h-full min-h-[165px]'>
            <img className=' min-h-[126px] min-w-[113px] md:w-[350px] md:h-[350px]' src="./img/Diseños.jpg" alt="promo" />
            <p className=' text-xs mt-1'>Descripcion</p>
        </div>
        <div className='flex flex-col r min-h-[165px]ounded border p-2 sm:p-4 w-auto h-full min-h-[165px]'>
            <img className=' min-h-[126px] min-w-[113px] md:w-[350px] md:h-[350px]' src="https://i.pinimg.com/736x/7b/91/d2/7b91d275682bfad64926f3476c919a4f.jpg" alt="" />
            <p className=' text-xs mt-1'>Descripcion</p>
        </div>
    </div>
  )
}

export default Promos