import { CategoryType } from "@/assets/types/shared/category.type";

const generateCategoryTemplate = (category: CategoryType) =>
  `<li class="category-list__item" id="${category.title.toLowerCase()}">
    <a href="#${category.title.toLowerCase()}">
      <div class="category-icon">
        <i class="fa-solid ${category.icon}"></i>
      </div>
      <div class="category-name">${category.title}</div>
    </a>
  </li>`


export {
  generateCategoryTemplate
}