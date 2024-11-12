import { MenuCategoryType } from "@/assets/types/shared/category.type";
import { generateCategoryTemplate } from "./utils";
const insertMenuCategoris = (categories: MenuCategoryType[]) => {
  const categoriesWrapper = document.querySelector('.category-list') as HTMLElement;
  
  categories.forEach(category => 
      categoriesWrapper.insertAdjacentHTML(
        "beforeend",
        generateCategoryTemplate(category)
      )
  )
}
export {
  insertMenuCategoris
}