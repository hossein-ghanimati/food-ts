import { MenuCategoryType} from "@/assets/types/shared/category.type";
import sendApiReq from "../../configs/apiReq";

const getMenuCategories = async () => {
  const response = await sendApiReq()("/graphql", {
    query: `
      query {
        categories {
          title,
          icon
        }
      }
    `
  })
  const categories: MenuCategoryType[] = response?.data?.categories;
  console.log("Menu Categories =>", categories);
  
  return categories || null
}

export {
  getMenuCategories
}