import { AddOrderOutputType, userOrdersType } from "@/assets/types/shared/order.type"
import sendApiReq from "../../configs/apiReq"

const addOrder = async (orderID: string, count: number) => {
  const response = await sendApiReq(true)("graphql", {
    query: `
      mutation {
        createOrder(input: {
          count: ${count},
          food: "${orderID}"
        }){
          food{
            name,
            price
          },
          count
        }
      }
    `
  })

  const data: AddOrderOutputType = response.data.createOrder;
  return data || null
}

const getUserOrders = async () => {
  const response = await sendApiReq(true)("graphql", {
    query: `
      query {
        userOrders{
          food{
            name,
            price
          },
          count
        }
      }
    `
  })

  const data: userOrdersType[] = response.data.userOrders;
  console.log("User Orders ->", data)

  return data || null
}

export {
  addOrder,
  getUserOrders
}