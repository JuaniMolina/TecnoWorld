import React from 'react'
import Card from '../../components/card'
import SideBar from './SideBar';
import { fetchData } from '@/helpers/products.helper';


const CardContainer: React.FC = async () => {
    const data = await fetchData();
    
    return (
        <div className='w-full h-full flex justify-center '>
            {/* <SideBar /> */}
            <div className='flex justify-center items-center flex-wrap gap-4 my-4'>
                {data?.map((product: any) => {
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
                    }
                )}
            </div>
            
        </div>
    )
}

export default CardContainer;