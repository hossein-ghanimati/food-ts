export type UserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER"
}