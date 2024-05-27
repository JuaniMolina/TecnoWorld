import { IloginData } from "./types/types"
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export const LoginFetch = async(data:IloginData) =>{
    try {
        const res = await fetch(`${apiUrl}/users/login`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        
        if(res.ok){
            const responseData = res.json();
            return responseData
        } else {
            throw new Error (' Hay un error e la solicitud');
        }
    } catch (error) {
        console.log(error);
        throw new Error ('Error al realizar la solicitud al servidor');
    }
}