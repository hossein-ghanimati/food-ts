import { PanelUserType } from "@/assets/types/shared/user.type";

const generateUserTdTemplate = (user: PanelUserType) => `
  <div class="table-row">
    <p class="id">#${user._id}</p>
    <p>${user.username}</p>
    <p>${user.email}</p>
    <div class="flex center">
      <p class="${user.role === "ADMIN" ? "green" : "yellow"
        }-status">${user.role}</p>
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
  generateUserTdTemplate
}