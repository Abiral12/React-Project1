import { axiosInstance } from "../../Utils/Config/apiconfig";

export const login = async () =>{
    const response = await axiosInstance.get('Authentication')
    return response
}