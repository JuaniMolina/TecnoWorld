import { IProduct } from "./types/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function obtenerIds(array: IProduct[]){
    const ids = array.map((element)=> Number(element.id));
    return ids;
}

export const sumarPrecios = (carrito: IProduct[]): number => {
    let total = 0;
    
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].price;     
    }

    return total;
};

export  async function sendOrder(products: number[], token: string){
    try {
        const res = await fetch(`${apiUrl}/orders`, {
            method:"POST",
            headers:{
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify({products: products})
        })
        return res.status
    } catch (error) {
        console.log(error);    
    }
}

