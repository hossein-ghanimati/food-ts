import { getCategories } from "@/assets/services/axios/requests/shared/categories.reqs"
import { insertCategoris } from "./funcs/home"

const renderCategories = async () => {
  const categories = await getCategories()  
  categories && insertCategoris(categories)
}

renderCategories()