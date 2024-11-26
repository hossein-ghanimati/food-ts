import sendApiReq from "../../configs/apiReq"
import { RegisterInputType, RegisterOutputType } from "@/assets/types/shared/auth/register.type"
import { LoginInputType } from "@/assets/types/shared/auth/login.type";
import { GetMeType } from "@/assets/types/shared/auth/getMe.type";

const register = async (userData: RegisterInputType) => {
  console.log("New User Data -->", userData);
  
  const response = await sendApiReq()("/graphql", {
    query: `
    mutation {
      user: registerUser(username: "${userData.username}", email: "${userData.email}", password: "${userData.password}") {
        token
        user {
          username
          email
          role
        }
      }
    }
  `
  })  
  const data: RegisterOutputType = response?.data?.user
  console.log("User Registered Data =>", data)
  
  return data || null
}

const login = async (userData: LoginInputType) => {
  console.log("User Login Data -->", userData);
  
  const response = await sendApiReq()("/graphql", {
    query: `
    mutation {
      user: loginUser(email: "${userData.email}", password: "${userData.password}") {
        token
        user {
          username
          email
          role
        }
      }
    }
  `
  })  

  
  const data: RegisterOutputType = response?.data?.user
  console.log("User Logined Data =>", data)
  
  return data || null
}

const getMe = async () => {  
  
    const response = await sendApiReq(true)("/graphql", {
      query: `
      query {
        me: getMe {
          username,
          email,
          role
        }
      }
    `
    })  
  

  
  const data: GetMeType = response.data.me 
  console.log("Me =>", data);
  
  return data || null
}
  


export {
  login,
  register,
  getMe
}