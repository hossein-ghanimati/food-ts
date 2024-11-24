import { getMe } from "@/assets/services/axios/requests/shared/auth"

const renderProtect = async () => {
  const user = await getMe();  
  user.role !== "ADMIN" ? location.href = "/" : null
}
renderProtect()