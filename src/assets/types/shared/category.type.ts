import { FoodType } from "./food.type";

export  type CategoryType = {
  _id: string;
  title: string;
  icon: string;
  foods: FoodType[]
}