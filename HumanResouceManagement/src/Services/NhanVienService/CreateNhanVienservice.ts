import {NhanVien} from '../../Models/Dtos/NhanVienDto';
import {AppResponse} from '../../Models/AppResponse';
import {axiosInstance} from '../axiosConfig';
const loginUrl = 'NhanVien';
export const handleNhanVien = async (model: NhanVien): Promise<AppResponse<string>> => {

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