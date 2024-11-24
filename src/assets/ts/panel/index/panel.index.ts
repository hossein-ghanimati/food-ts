import { renderProtect } from "../../protect/protect";
await renderProtect()



import { hasClass, toggleClass } from "@/assets/types/shared/elems";
import { getFromLocal, setToLocal } from "../../utils/browserMemo";

const body = document.querySelector("body") as HTMLElement
const modeToggle = body.querySelector(".mode-toggle") as HTMLElement;
const sidebar = body.querySelector("nav") as HTMLElement;
const sidebarToggle = body.querySelector(".sidebar-toggle") as HTMLElement;


const handleTheme = () => {
  const theme = getFromLocal("mode");
  theme === "dark" &&
    toggleClass(body, "dark");
}
handleTheme();

const handleStatus = () => {
  const getStatus = getFromLocal("status");
  getStatus === "close" &&
    toggleClass(sidebar, "close");
}
handleStatus();

modeToggle.addEventListener("click", () => {
  toggleClass(body, "dark");
  hasClass(body, "dark")
    ? setToLocal("mode", "dark")
    : setToLocal("mode", "light")
});

sidebarToggle.addEventListener("click", () => {
  toggleClass(sidebar, "close");
  hasClass(sidebar, "close")
    ? setToLocal("mode", "close")
    : setToLocal("mode", "open")
})