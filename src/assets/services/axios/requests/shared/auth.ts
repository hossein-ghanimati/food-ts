import sendApiReq from "../../configs/apiReq"
import { RegisterInputType, RegisterOutputType } from "@/assets/types/shared/auth/register.type"
import { LoginInputType } from "@/assets/types/shared/auth/login.type";
import { GetMeType } from "@/assets/types/shared/auth/getMe.type";
// const getUser = async () => {
//   const getReq = await sendApiReq(true).get("/user")
//   const user: UserType | null = getReq.status < 300 ? getReq.data : null;

//   return{
//     user: user,
//     isLogin: user ? true : false
//   }
// }




const register = async (userData: RegisterInputType) => {
  console.log("New User Data -->", userData);
  
  const response = await sendApiReq()("/graphql", {
    query: `
    mutation {
      registerUser(username: "${userData.username}", email: "${userData.email}", password: "${userData.password}") {
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
  const data: RegisterOutputType = response?.data?.registerUser
  console.log("User Registered Data =>", data)
  
  return data || null
}

const login = async (userData: LoginInputType) => {
  console.log("User Login Data -->", userData);
  
  const response = await sendApiReq()("/graphql", {
    query: `
    mutation {
      loginUser(email: "${userData.email}", password: "${userData.password}") {
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

  
  const data: RegisterOutputType = response?.data?.loginUser
  console.log("User Logined Data =>", data)
  
  return data || null
}

const getMe = async () => {  
  
    const response = await sendApiReq(true)("/graphql", {
      query: `
      query {
        getMe {
          username,
          email,
          role
        }
      }
    `
    })  
  

  
  const data: GetMeType = response.data.getMe 
  console.log("Me =>", data);
  
  return data || null
}
  


export {
  login,
  register,
  getMe
}