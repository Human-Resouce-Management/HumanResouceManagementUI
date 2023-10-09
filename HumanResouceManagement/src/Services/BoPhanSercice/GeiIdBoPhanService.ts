import { BoPhan } from "@/Models/Dtos/BoPhanDto";
import { axiosInstance } from "../axiosConfig";
import { AppResponse } from "@/Models/AppResponse";



export const GetIDBoPhan = async (Id:any) : Promise<AppResponse<BoPhan>> => {
    let result = new AppResponse<BoPhan> ;

try{
    const GetResult = await axiosInstance.get(`BoPhan/${Id}`);
    const responseObject = GetResult.data;
    result = responseObject;
    }catch(error){
        console.error(error);
        result.isSuccess=false;
        result.message= JSON.stringify(error);
}
return result;

}