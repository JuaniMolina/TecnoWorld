'use client'
import { buscarPorCategoryId, fetchData } from '@/helpers/products.helper';
import { IProduct } from '@/helpers/types/types';
import Card from '@/components/card';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import LoadingPage from '@/components/Loading/LoadingPage';

const ProducfFiltered = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const[products, setProducts] =useState<IProduct[]>([])
    const[filteredData, setFilteredData] = useState<IProduct[]>([])
    const { filter } = useParams();
    const filtro = Number(filter);

    useEffect(()=>{
        const getData = async()=>{
            const data = await fetchData();
            if(data){
                setProducts(data);
            }
            setLoading(false)
        }
        getData()
    },[])

    useEffect(()=>{
        const dataFiltrada = buscarPorCategoryId(products, filtro);
        setFilteredData(dataFiltrada)    
    },[products])

    return (
        <div className='flex items-center justify-center w-full h-full'>
            {loading ? ( // Mostrar la página de carga si loading es true
                <LoadingPage />
            ) : filteredData.length !== 0 ? (
                <div className='w-[80%] min-h-[40vh] grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 p-5 justify-items-center bg-slate-300 my-4 rounded'>
                    {filteredData?.map((product) => {
                        return <Card
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            categoryId={product.categoryId}
                            stock={product.stock}
                        />
                    })}
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                    <h2>Todavia no tenemos estos productos</h2>
                </div>
            )}
        </div>
    )
}

export default ProducfFiltered;