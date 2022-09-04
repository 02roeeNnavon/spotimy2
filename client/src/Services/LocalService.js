function loadFromStorage(key) {
    const value = localStorage.getItem(key);
    const parsedValue = value !== "undefined" ? JSON.parse(value) : null;
    return parsedValue;
  }
  
  function saveToStorage(key, value) {
    const stringifiedValue = value !== undefined ? JSON.stringify(value) : null;
    localStorage.setItem(key, stringifiedValue);
  }
  
  function clearStorage(key) {
    localStorage.removeItem(key);
  }
  
  export { loadFromStorage, saveToStorage, clearStorage };