export type UserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER"
}
export type PanelUserType = Omit<UserType, "password">