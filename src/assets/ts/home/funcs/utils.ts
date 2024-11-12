import { CategoryType } from "@/assets/types/shared/category.type";

const generateCategoryTemplate = (category: CategoryType) =>
  `<li class="category-list__item" id="${category.title.toLowerCase()}">
    <a href="#${category.title.toLowerCase()}">
      <div class="category-icon">
        <svg t="1586140242732" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4517" width="18" height="18">
          <path d="M1002.666667 842.666667v64H21.333333v-64h981.333334zM512 106.666667a117.333333 117.333333 0 0 1 98.090667 181.738666c192 43.968 335.786667 214.357333 339.2 418.88l0.042666 7.381334H1002.666667v64H21.333333v-64h53.333334c0-207.786667 144.938667-381.76 339.221333-426.282667A117.333333 117.333333 0 0 1 512 106.666667z m0 234.666666c-203.84 0-369.536 163.370667-373.269333 366.314667L138.666667 714.666667h746.666666C885.333333 508.48 718.186667 341.333333 512 341.333333z m118.954667 87.722667a310.314667 310.314667 0 0 1 164.416 161.408l3.2 7.573333-59.264 24.149334a246.314667 246.314667 0 0 0-126.336-131.2l-6.634667-2.88 24.618667-59.050667zM512 170.666667a53.333333 53.333333 0 1 0 0 106.666666 53.333333 53.333333 0 0 0 0-106.666666z" p-id="4518"></path>
        </svg>
      </div>
      <div class="category-name">${category.title}</div>
    </a>
  </li>`


export {
  generateCategoryTemplate
}