import { CategoryType } from "./category.type";

export type FoodType = {
  id: string;
  name: string;
  price: number;
  category: CategoryType;
  inventory: number;
}

export type LandingFoodType = Omit<FoodType, 
  "id" 
  | "inventory"
  | "category"
> & {
  category: {
    title: string
  }
}