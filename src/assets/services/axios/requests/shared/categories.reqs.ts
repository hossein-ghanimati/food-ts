import {CategoryType, MenuCategoryType} from "@/assets/types/shared/category.type";
import sendApiReq from "../../configs/apiReq";

const getCategories = async () => {
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
  console.log("Categories =>", categories);
  
  return categories || null
}

export {
  getCategories
}