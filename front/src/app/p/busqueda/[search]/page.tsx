'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/card'
import { IProduct } from '@/helpers/types/types'
import { fetchData, getProducts } from '@/helpers/products.helper';
import { useParams } from 'next/navigation';


const SearchResult = () => {
    const[products, setProducts] = useState<IProduct[]>([]);
    const[filteredData, setFilteredData] = useState<IProduct[]>([])
    const {search} = useParams();
    const data = String(search)
    

    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData();
            if (data) {
                setProducts(data);
            }
        };
        fetchDataAsync();
    }, []);

    useEffect(() => {
        const results = getProducts(products, data);
        setFilteredData(results);
    }, [products, data]);

    return (
        <div className='flex items-center justify-center'>
            <div className='w-[80%] min-h-[40vh] grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 p-5 justify-items-center bg-slate-300 my-4 rounded'>
                {filteredData.length != 0 ?
                    filteredData?.map((product)=>{
                        return  <Card
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            categoryId={product.categoryId}
                            stock={product.stock}
                        />
                    }) :
                    <div className='w-full flex items-center justify-center'>
                        <h2>No hay concidencias con tu busqueda</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchResult;