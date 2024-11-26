import { emptyTheElem } from "@/assets/ts/utils/elems";
import { PanelOrderType } from "@/assets/types/shared/order.type";
import { generateOrderTdTemplate } from "./utils";

const insertOrders = (orders: PanelOrderType[]) => {
  const ordersWrapper = document.querySelector(".table main") as HTMLElement
  emptyTheElem(ordersWrapper);

  ordersWrapper.insertAdjacentHTML(
    "beforeend",
    orders.map((order, index) => generateOrderTdTemplate(order, index)).join("")
  )
}

export {
  insertOrders
}