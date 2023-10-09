import { BoPhan } from "@/Models/Dtos/BoPhanDto";
import { axiosInstance } from "../axiosConfig";
import { AppResponse } from "@/Models/AppResponse";



export const DeleteBoPhan = async (Id:BoPhan) : Promise<AppResponse<string>> => {
    let result = new AppResponse<string> ;

try{
    const GetResult = await axiosInstance.delete(`BoPhan?id=${Id}`);
    const responseObject = GetResult.data;
    result = responseObject;
    }catch(error){
        console.error(error);
        result.isSuccess=false;
        result.message= JSON.stringify(error);
}
return result;

}