import { CategoryType } from "@/assets/types/shared/category.type";
import { generateCategoryTemplate } from "./utils";
const insertCategoris = (categories: CategoryType[]) => {
  const categoriesWrapper = document.querySelector('.category-list') as HTMLElement;
  
  categories.forEach(category => 
      categoriesWrapper.insertAdjacentHTML(
        "beforeend",
        generateCategoryTemplate(category)
      )
  )
}
export {
  insertCategoris
}