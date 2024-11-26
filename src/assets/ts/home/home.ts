import { getMenuCategories } from "@/assets/services/axios/requests/shared/categories.reqs"
import { insertLandingFoods, insertMenuCategoris, insertOrders } from "./funcs/home"
import { getLandingFoods } from "@/assets/services/axios/requests/shared/food.reqs"
import { isUserLogin } from "../utils/auth"
import { showInputSwal, showToastSwal } from "../utils/swal"
import { addOrder, getUserOrders } from "@/assets/services/axios/requests/shared/orders.reqs"

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

const renderLatestOrders = async () => {
  const orders = await getUserOrders()
  orders && insertOrders(orders)
}
renderLatestOrders()

const addOrderHandler = (orderID: string) => {
  const isLogin = isUserLogin()
  if(isLogin){
    showInputSwal({
      title: "How Do You Want ?",
      icon: "question",
      hasClose: true,
      callBack: async result => {
        if (result.isConfirmed) {
          try {
            const newOrder = await addOrder(orderID, +result.value || 1);
            showToastSwal({
              title: `${newOrder.food.name} Added Succcessfully. (${newOrder.count} Number)`,        
              icon: "success",
            })
          }
          catch (error) {
            const errorMessage = (error as Error).message
            console.log(errorMessage);
            
            showToastSwal({
              title: errorMessage,
              icon: "error",
            })
          }
        }
      }
    })
  }else{
    showToastSwal({
      title: "You Shoud Be Login In First ...",
      icon: "warning",
    })
  }
}
declare global {
  interface Window {
    addOrderHandler: (orderID: string) => void; 
  }
}

window.addOrderHandler = addOrderHandler
