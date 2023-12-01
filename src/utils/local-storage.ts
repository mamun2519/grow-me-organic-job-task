export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return JSON.parse(localStorage.getItem(key) as string);
};

export const setIntoLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, value);
};

export const removeLocalStorage = (authKey: string) => {
  return localStorage.removeItem(authKey);
};
