import { CategoryType } from "./category.type";

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  category: CategoryType;
  inventory: number;
}

export type LandingFoodType = Omit<FoodType,
  | "inventory"
  | "category"
> & {
  category: {
    title: string
  }
}