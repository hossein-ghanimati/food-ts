const getFromLocal = (key: string) => {
  const getItem = localStorage.getItem(`food-${key}`);
  return getItem ? JSON.parse(getItem) : null
}
const setToLocal = (key: string, value: any) => {
  localStorage.setItem(`food-${key}`, JSON.stringify(value));
}
const removeFromLocal = (key: string) => {
  localStorage.removeItem(`food-${key}`);
}
const getFromSession = (key: string) => {
  const getItem = sessionStorage.getItem(`food-${key}`);
  return getItem ? JSON.parse(getItem) : null
}
const setToSession = (key: string, value: any) => {
  sessionStorage.setItem(`food-${key}`, JSON.stringify(value));
}

export  {
  getFromLocal,
  setToLocal,
  removeFromLocal,
  getFromSession,
  setToSession
}