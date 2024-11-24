import { getMe } from "@/assets/services/axios/requests/shared/auth"

const renderProtect = () => {
  getMe()
}
renderProtect()