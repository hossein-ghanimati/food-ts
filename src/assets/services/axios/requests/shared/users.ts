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

export {
  getUsers
}