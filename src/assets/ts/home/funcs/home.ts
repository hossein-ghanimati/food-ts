import { MenuCategoryType } from "@/assets/types/shared/category.type";
import { generateLandingFoodTemplate, generateMenuCategoryTemplate } from "./utils";
import { LandingFoodType } from "@/assets/types/shared/food.type";
const insertMenuCategoris = (categories: MenuCategoryType[]) => {
  const categoriesWrapper = document.querySelector('.category-list') as HTMLElement;
  
  categories.forEach(category => 
      categoriesWrapper.insertAdjacentHTML(
        "beforeend",
        generateMenuCategoryTemplate(category)
      )
  )
}
const insertLandingFoods = (foods: LandingFoodType[]) => {
  const foodsWrapper = document.querySelector('.restaurant-list') as HTMLElement;
  
  foods.forEach(food => 
      foodsWrapper.insertAdjacentHTML(
        "beforeend",
        generateLandingFoodTemplate(food)
      )
  )
}
export {
  insertMenuCategoris,
  insertLandingFoods
}