import { getCategories } from "@/assets/services/axios/requests/shared/categories"

const renderCategories = async () => {
  const categories = await getCategories()
}

renderCategories()