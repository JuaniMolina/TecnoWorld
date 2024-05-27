import { IProduct } from "./types/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async()=>{
    try {
        const res = await fetch(`${apiUrl}/products`);
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }
    
}


export const fetchOrders = async(token: string) => {
    try {
        if(!token){
            throw new Error("Falta el token")
        }
        const res  = await fetch(`${apiUrl}/users/orders`,{
            method:'GET',
            headers:{
                'content-type': 'application/json',
                'Authorization': token
            }
        })
        return res.json();        
    } catch (error) {
        console.log(error)
    }
}


export function getProducts (products:IProduct[], data:string){
    const filtered:IProduct[] = [];
    products.map((product:IProduct)=>{ 
        if(product.name.toLowerCase().includes(data)){
            filtered.push(product)
        }}
    )
    return filtered;
}

export function buscarPorCategoryId(array:IProduct[], categoryId: number) {
    return array.filter((item:IProduct) => item.categoryId === categoryId);
}














