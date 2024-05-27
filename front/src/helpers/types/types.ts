export interface CardsProps {
    id:string;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

export interface IloginData{
    email: string,
    password:string
}

export interface IRegisterData {
    email: string,
    password: string,
    name: string,
    address: string,
    phone: string
}

export interface IProduct{
    id: string,
    name:string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number
}

export interface IOrders{
    products: Array<IProduct>
}

export interface IRegisteredUser{
    address: string,
    credential: Array<IloginData>,
    email: string,
    id: number,
    name: string,
    phone: string,
    role: string,
    orders: Array<IProduct>
}

export interface ICarritoProps{
    id: string,
    name:string;
    image: string;
    price:number;
    onDelete?: () => void;
}

export interface IOrder{
    id: number,
    status: string,
    date: Date,
    products: IProduct[]
}

export interface RegisterProps {
    onSuccess: () => void;
  }