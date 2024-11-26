import { getMenuCategories } from "@/assets/services/axios/requests/shared/categories.reqs"
import { insertLandingFoods, insertMenuCategoris } from "./funcs/home"
import { getLandingFoods } from "@/assets/services/axios/requests/shared/food.reqs"
import { isUserLogin } from "../utils/auth"
import { showToastSwal } from "../utils/swal"

const renderMenuCategories = async () => {
  const categories = await getMenuCategories()  
  categories && insertMenuCategoris(categories)
}
renderMenuCategories()

const renderLandingFoods = async () => {
  const foods = await getLandingFoods()  
  foods && insertLandingFoods(foods)
}
renderLandingFoods()


const addOrderHandler = async (orderID: string) => {
  const isLogin = isUserLogin()
  if(isLogin){
    try {
      await addOrder();
      showToastSwal({
        title: "Order Added Succcessfully.",        
        icon: "success",
      })
    } catch (error) {
      const errorMessage = (error as Error).message
      showToastSwal({
        title: errorMessage,
        icon: "error",
      })
    }
  }else{
    showToastSwal({
      title: "You Shoud Be Login In First ...",
      icon: "warning",
    })
  }
}
