const getLocalItem = (key: string) => {
  return localStorage.getItem(key);
};

const setLocalItem = <T extends string | number | boolean | object | null>(
  key: string,
  value: T
) => {
  const val = typeof value === "string" ? value : JSON.stringify(value);

  return localStorage.setItem(key, val);
};

export { getLocalItem, setLocalItem };
