import { MenuCategoryType } from "@/assets/types/shared/category.type";
import { generateLandingFoodTemplate, generateMenuCategoryTemplate, generateOrderTemplate } from "./utils";
import { LandingFoodType } from "@/assets/types/shared/food.type";
import { UserOrderType } from "@/assets/types/shared/order.type";
import { emptyTheElem } from "../../utils/elems";
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
const insertOrders = (orders: UserOrderType[]) => {
  const ordersWrapper = document.querySelector('.food-list') as HTMLElement;
  emptyTheElem(ordersWrapper)

  orders.forEach(food => 
      ordersWrapper.insertAdjacentHTML(
        "beforeend",
        generateOrderTemplate(food)
      )
  )
}
export {
  insertMenuCategoris,
  insertLandingFoods,
  insertOrders
}