import axios from "axios";
import { getFromLocal } from "../../../ts/utils/browserMemo";
import { extractionErrorMessage, hasError } from "../errorHandlers/errorHandler";



const sendApiReq = (includeAuthorization = false) => {
  

  const apiReq = axios.create({
    baseURL: 'https://sabzlearn-graphql.iran.liara.run',
  });

  apiReq.interceptors.request.use((config) => {
    
    includeAuthorization ? config.headers.set({
      Authorization: `Bearer ${getFromLocal("token")}`
    }) : "";


    return config
  })

  apiReq.interceptors.response.use(
    (response) => {    
      if(hasError(response)) {
        throw new Error(extractionErrorMessage(response));
      };
      
      return response.data    
    },
    err => {
      console.warn("Your Req Has An Err :", err)
      return null
    }
  )
  
  

  return apiReq.post

}




export default sendApiReq