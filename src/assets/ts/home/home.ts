import { getMenuCategories } from "@/assets/services/axios/requests/shared/categories.reqs"
import { insertLandingFoods, insertMenuCategoris } from "./funcs/home"
import { getLandingFoods } from "@/assets/services/axios/requests/shared/food.reqs"

const renderMenuCategories = async () => {
  const categories = await getMenuCategories()  
  categories && insertMenuCategoris(categories)
}

const renderLandingFoods = async () => {
  const foods = await getLandingFoods()  
  foods && insertLandingFoods(foods)
}

renderMenuCategories()
renderLandingFoods()