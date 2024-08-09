import { axiosInstance } from "../../Utils/Config/apiconfig"

export const getPopularMovies = async()=>{
    const response = axiosInstance.get("movie/popular")
    const data = await response.data
    return data
} 