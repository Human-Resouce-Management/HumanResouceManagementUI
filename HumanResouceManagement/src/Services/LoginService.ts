// @ts-ignore
import { LoginViewModel } from '../Models/LoginViewModel'
// @ts-ignore
import { AppResponse } from '../Models/AppResponse'
// @ts-ignore
import { axiosInstance } from "./axiosConfig.ts"

import Cookies from 'js-cookie';
import { reactive } from 'vue';
const loginUrl = "Account/login";

export const handleLogin = async (model: LoginViewModel): Promise<AppResponse<string>> => {

    let resust: AppResponse<string>=({
        isSuccess: false,
        message: '',
        data: ''
    });

    try {
        const postResult = await axiosInstance.post(loginUrl, model);
        console.log(postResult.data);
        const responseObject = postResult.data
        resust = responseObject;
        if (resust.isSuccess) {
            if(resust.data!=undefined){
                Cookies.set('accessToken', resust.data, { expires: undefined });
            }
            
        }
        else {
            console.log(resust.message);

        }
    } catch (error ) {
        console.error(error);

    }
    return resust;

}
