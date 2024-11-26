import { getPanelOrders } from "@/assets/services/axios/requests/shared/orders.reqs"
import { insertOrders } from "./funcs/orders"

const renderOrders = async () => {
  const orders = await getPanelOrders()
  orders && insertOrders(orders)
}
renderOrders()