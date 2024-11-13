import { UserType } from "@/assets/types/shared/user.type"
import sendApiReq from "../../configs/apiReq"
import { RegisterInputType, RegisterOutputType } from "@/assets/types/shared/auth/register.type"

const login = async (userData: {
  identifier: string
  password: string
}) => {
  const response = await sendApiReq()("/auth/login", userData).catch(() => {})
  const token = response?.data?.accessToken
  return token || null
}
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
  


export {
  login,
  register,
  // getUser
}