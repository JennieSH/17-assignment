const getLocalItem = (key) => {
  return localStorage.getItem(key);
};

const setLocalItem = (key, value) => {
  const val = typeof value === "string" ? value : JSON.stringify(value);

  return localStorage.setItem(key, val);
};

export { getLocalItem, setLocalItem };
