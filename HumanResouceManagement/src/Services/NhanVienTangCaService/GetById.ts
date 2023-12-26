import type { TangCaDto } from "@/Models/Dtos/TangCaDto";
// import type { LoanPayDto } from "@/Models/Dtos/LoanPayDto";
import { AppResponse } from "@/Models/AppResponse";
import { axiosInstance } from "../axiosConfig";


export const handleGetLoan = async (model: string): Promise<AppResponse<TangCaDto>> => {

    let result= new AppResponse<TangCaDto>();

    try {
        const respone = await axiosInstance.get("TangCa/" +model);
        console.log(respone.data);
        const responseObject = respone.data
        result = responseObject;
       return result;
    } catch (error) {
        console.error(error);
        result.isSuccess=false;
        result.message= JSON.stringify(error);
    }
    return result;

}
