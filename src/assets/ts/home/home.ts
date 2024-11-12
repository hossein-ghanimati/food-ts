import { getMenuCategories } from "@/assets/services/axios/requests/shared/categories.reqs"
import { insertMenuCategoris } from "./funcs/home"

const renderMenuCategories = async () => {
  const categories = await getMenuCategories()  
  categories && insertMenuCategoris(categories)
}

renderMenuCategories()