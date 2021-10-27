import axios from "axios";
import { BACKEND_SALES } from "../const/backend";

const saveSale = async (saleData) => {
    const salesURL = BACKEND_SALES;
    try {
        const response = await axios.post(salesURL, saleData)
        return response 
        }
        catch (error) {
            return error
        }
    
}

export default saveSale;