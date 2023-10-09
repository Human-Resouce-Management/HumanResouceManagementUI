import { BoPhan } from "@/Models/Dtos/BoPhanDto";
import { axiosInstance } from "../axiosConfig";
import { reactive } from 'vue';
import axios from "axios";
import { AppResponse } from "@/Models/AppResponse";
const BoPhanurl = "BoPhan"
export const EditBoPhan = async (model: BoPhan): Promise<AppResponse<BoPhan>> => {
let result = new AppResponse<BoPhan> ;
try{
const PutResult = await axiosInstance.put(`BoPhan/${model.id}`,model);
const responseObject = PutResult.data;
result = responseObject;
}catch(error){
    console.error(error);
    result.isSuccess=false;
    result.message= JSON.stringify(error);
}


return result;

}

