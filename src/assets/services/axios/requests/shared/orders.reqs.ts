import { AddOrderOutputType } from "@/assets/types/shared/order.type"
import sendApiReq from "../../configs/apiReq"

const addOrder = async (orderID: string, count: number) => {
  const response = await sendApiReq(true)("graphql", {
    query: `
      mutation {
        createOrder(input: {
          food: "${orderID}",
          count: ${count}
        })
      }
    `
  })

  const data: AddOrderOutputType = response.data.createOrder;
  return data || null
}

export {
  addOrder
}