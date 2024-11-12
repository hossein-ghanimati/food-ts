import { CategoryType } from "@/assets/types/shared/category.type";
import { generateCategoryTemplate } from "./utils";
import { emptyTheElem } from "../../utils/elems";

const insertCategoris = (categories: CategoryType[]) => {
  const categoriesWrapper = document.querySelector('.category-list') as HTMLElement;
    
  emptyTheElem(categoriesWrapper)
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