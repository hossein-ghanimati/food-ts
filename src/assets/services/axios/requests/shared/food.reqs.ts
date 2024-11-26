import { LandingFoodType } from "@/assets/types/shared/food.type";
import sendApiReq from "../../configs/apiReq";

const getLandingFoods = async () => {
  const response = await sendApiReq()("/graphql", {
    query: `
      query {
        foods {
          _id
          name,
          price,
          category {
            title
          }
        }
      }
    `
  })
  const foods: LandingFoodType[] = response?.data?.foods;
  console.log("Landing Foods =>", foods);
  
  return foods || null
}

export {
  getLandingFoods
}