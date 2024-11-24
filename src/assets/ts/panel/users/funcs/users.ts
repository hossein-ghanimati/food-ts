import { PanelUserType } from "@/assets/types/shared/user.type";
import { generateUserTdTemplate } from "./utils";
const usersTable = document.querySelector(".users-table") as HTMLTableElement;


const insertUsers = (users: PanelUserType[]) => {
  usersTable.innerHTML = "";
  usersTable.insertAdjacentHTML(
    "beforeend",
    users.map(user => generateUserTdTemplate(user)).join("")
  )
}

export {
  insertUsers
}