import { getUsers } from "@/assets/services/axios/requests/shared/users";
import { insertUsers } from "./funcs/users";

const renderUsers = async () => {
  const users = await getUsers()
  insertUsers(users);
}
renderUsers()


const removeUserHandler = (userID: string) => {
  console.log(userID);
  
}
declare global {
  interface Window {
    removeUserHandler: (userID: string) => void;  // نوع تابع خود را مشخص کنید
  }
}

window.removeUserHandler = removeUserHandler
