// @ts-ignore
import { RegisterViewModel } from '../Models/RegisterViewModel.ts'
// @ts-ignore
import { AppResponse } from '../Models/AppResponse'
// @ts-ignore
import { axiosInstance } from "./axiosConfig"

import Cookies from 'js-cookie';
import { reactive } from 'vue';
const registerUrl = "Account/register";

export const handleRegister = async (model: RegisterViewModel): Promise<AppResponse<string>> => {

    let result= new AppResponse<string>();

    try {
        const postResult = await axiosInstance.post(registerUrl, model);
        console.log(postResult.data);
        const responseObject = postResult.data
        result = responseObject;
       return result;
    } catch (error) {
        console.error(error);
        result.isSuccess=false;
        result.message= JSON.stringify(error);
    }
    return result;

}

