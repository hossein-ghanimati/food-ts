const toggleClass = (elem: HTMLElement, className: string) =>
  elem.classList.toggle(className)
const addClass = (elem: HTMLElement, className: string) =>
  elem.classList.add(className)
const removeClass = (elem: HTMLElement, className: string) =>
  elem.classList.remove(className)
const hasClass = (elem: HTMLElement, className: string) =>
  elem.classList.contains(className)

export {
  toggleClass,
  addClass,
  removeClass,
  hasClass,
}