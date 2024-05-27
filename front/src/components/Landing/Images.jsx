import React from 'react'

function Images() {
  return (
    <div className='flex gap-2 w-[95%] h-[80%] my-2 items-center justify-center'>
        <div >
            <img className='rounded w-full' src="./img/img1.png" alt="" />
        </div>
        <div >
            <img className='rounded w-full' src="https://images.fravega.com/f300/ac647b506c1a9f4b5b9f24e60fa1266a.jpg.webp" alt="" />
        </div>
    </div>
  )
}

export default Images;