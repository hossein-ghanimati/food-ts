import { FoodType } from "./food.type";
import { UserType } from "./user.type"

export type OrderType = {
  user: UserType;
  food: FoodType;
  count: number;
  isDeliver: boolean;
}

export type AddOrderOutputType = Omit<
  OrderType
  , "user" 
  | "isDeliver"
>