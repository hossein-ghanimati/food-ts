import { UserType } from "../user.type";

export type GetMeType = Omit<UserType,
  "password" |
  "_id"
>