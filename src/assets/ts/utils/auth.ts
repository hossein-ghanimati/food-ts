import { getFromLocal } from "./browserMemo"

const generateAuthPagesLink = (page : "login" | "register") => 
  `/${page}?after=${location.pathname === "/login" || location.pathname === "/register" ? "/" : location.pathname}`
const isAdmin = (user: {role: "ADMIN" | "USER"}) =>
  user.role === "ADMIN"

const isUserLogin = () => 
  !!getFromLocal("token")

export {
  generateAuthPagesLink,
  isAdmin,
  isUserLogin
}