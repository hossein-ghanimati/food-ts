import { PanelOrderType } from "@/assets/types/shared/order.type";

const generateOrderTdTemplate = (order: PanelOrderType, index: number) => `
  <div class="table-row">
    <p class="id">#${index}</p>
    <p>${order.user?.username}</p>
    <div class="flex center">
      <a to="" class="link"> ${order.food.name} (${order.count}x) </a>
    </div>
    <div class="flex center">
      <p class="${order.isDeliver ? "green" : "yellow"}-status">${order.isDeliver ? "Sent" : "Pending ..."}</p>
    </div>
    <div class="flex center">
      <p class="price">${order.food.price}$</p>
    </div>
    <div class="flex center">
      <button class="ui-button error">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <button class="ui-button primary">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  </div>
`

export {
  generateOrderTdTemplate
}