import { axiosInstance } from "../../Utils/Config/apiconfig";
import { clear } from "../../Utils/Config/storageConfig";

export const login = async () =>{
    const response = await axiosInstance.get('Authentication')
    return response
}

export const getUserDetail = async(accountId) =>{
    const response = await axiosInstance.get(`account/${accountId}`)
    return response
}

export const logout = () =>{
    clear()
    window.location.href="/"
}