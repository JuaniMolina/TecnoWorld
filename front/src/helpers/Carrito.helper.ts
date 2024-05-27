import Swal from "sweetalert2";
import { IProduct } from "./types/types";

export function removeProductFromCart(productId:string) {
    const cart = JSON.parse(localStorage.getItem('carrito')!) || [];
    
    const index = cart.findIndex((product: IProduct) => product.id === productId);

    if (index !== -1) {
    cart.splice(index, 1);

    localStorage.setItem('carrito', JSON.stringify(cart));
        console.log('hola');
        
    }
}

export const deleteHanlder = (onDelete: ()=> void, id: string) =>{
        
    Swal.fire({
        title: 'Estas seguro',
        text:'de eliminar este producto?',
        showCancelButton:true,
        confirmButtonColor: '#40c71f',
        confirmButtonText: 'Confirmar',
        cancelButtonColor: '#db1d1d'
    }).then((res) =>{
        if(res.isConfirmed){
            removeProductFromCart(id)
            onDelete();
            Swal.fire('Eliminado correctamente', '','success')
        }
    });
}

export const sumarPrecios = (carrito: IProduct[]): number => {
    let total = 0;
  
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].price;      
    }
    return total;
};