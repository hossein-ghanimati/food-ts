const generateAuthPagesLink = (page : "login" | "register") => 
  `/${page}?after=${location.pathname === "/login" || location.pathname === "/register" ? "/" : location.pathname}`
const isAdmin = (user: {role: "ADMIN" | "USER"}) =>
  user.role === "ADMIN"

export {
  generateAuthPagesLink,
  isAdmin
}