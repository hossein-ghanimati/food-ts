import { PanelUserType } from "@/assets/types/shared/user.type"
import sendApiReq from "../../configs/apiReq"

const getUsers = async () => {
  const response = await sendApiReq(true)("graphql", {
    query: `
        query {
            users {
                _id
                username
                email
                role
            }
        }
      `,
  })

  const data: PanelUserType[] = response.data.users
  return data || null
}
const removeUser = async (userID: string) => {
  const response = await sendApiReq(true)("graphql", {
    query: `
      mutation {
        user: removeUser(id: "${userID}"){
          username
        }
      }
    `
  })

  const data : {username: string} = response.data.user
  return data || null
}

export {
  getUsers,
  removeUser
}