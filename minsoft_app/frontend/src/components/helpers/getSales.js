import { BACKEND_SALES } from "../const/backend";
import axios from "axios";


const getSales = async () => {
    const salesURL = BACKEND_SALES;
    try {
        const response = await axios.get(`${salesURL}`);
        return response.data 
        }
        catch (e) {
            console.error( "Error al recibir los datos", [e])
        }  
}

export default getSales;