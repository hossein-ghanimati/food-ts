import { getUsers } from "@/assets/services/axios/requests/shared/users";
import { insertUsers } from "./funcs/users";


const renderUsers = async () => {
  const users = await getUsers()
  insertUsers(users);
}
renderUsers()

