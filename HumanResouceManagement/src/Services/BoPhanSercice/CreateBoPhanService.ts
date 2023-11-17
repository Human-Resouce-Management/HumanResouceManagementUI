import {BoPhan} from '../../Models/Dtos/BoPhanDto';
import { axiosInstance } from '../axiosConfig';
import { AppResponse } from '@/Models/AppResponse';



const loginUrl = "BoPhan";
export const handleBoPhan = async (model: BoPhan): Promise<AppResponse<string>> => {

    let resust: AppResponse<string>=({
        isSuccess: false,
        message: '',
        data: ''
    });

    try {
        const postResult = await axiosInstance.post(loginUrl , model);
        console.log(postResult.data);
        const responseObject = postResult.data;
        resust = responseObject;
        
    } catch (error ) {
        console.error(error);

    }
    return resust;

}
