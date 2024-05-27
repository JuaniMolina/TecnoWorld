'use client'
import React, { useEffect, useState } from 'react';
import LogReg from '@/components/Login/LogReg';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  useEffect(()=>{
    const data = localStorage.getItem('userSesion');

    if (data) router.push('/')
  },[])


  return (
    <div>
        <LogReg />
    </div>
  )
}

export default page