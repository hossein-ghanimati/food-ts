import { FoodType } from "./food.type";
import { UserType } from "./user.type"

export type OrderType = {
  user: UserType;
  food: FoodType;
  count: number;
  isDeliver: boolean;
}

export type AddOrderOutputType = {
  count: number;
  food: {
    name: string,
    price: number
  }
}

export type PanelOrderType = {
  user: {
    username: string
  }
  food: {
    name: string,
    price: number
  }
  count: number,
  isDeliver: boolean
}

export type UserOrderType = AddOrderOutputType