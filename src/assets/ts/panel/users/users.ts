import { getUsers, removeUser } from "@/assets/services/axios/requests/shared/users";
import { insertUsers } from "./funcs/users";
import { showConfirmSwal, showMsgSwal, showToastSwal } from "../../utils/swal";

const renderUsers = async () => {
  const users = await getUsers()
  insertUsers(users);
}
renderUsers()


const removeUserHandler = (userID: string) => {
  showConfirmSwal({
    title: "Are You Sure To Remove User ?",
    icon: "question",
    btnText: "No",
    cancelText: "Yes",
    callBack: async result => {
      if (result.isConfirmed) return false;
      try {
        const removedUser = await removeUser(userID)
        showToastSwal({
          title: `${removedUser.username} Removed.`,
          icon: "success"
        })
        renderUsers()
      } catch (error) {
        const errorMessage = (error as Error).message
        showToastSwal({
          title: errorMessage,
          icon: "error"
        })
      }
    }
  })  
}
declare global {
  interface Window {
    removeUserHandler: (userID: string) => void;  // نوع تابع خود را مشخص کنید
  }
}

window.removeUserHandler = removeUserHandler
