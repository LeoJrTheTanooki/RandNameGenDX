// Backup

/*
const saveToLocalStorage = (param) => {
  let nameList = getLocalStorage();
  nameList.push(param);
  localStorage.setItem("Names", JSON.stringify(nameList));
};

const getLocalStorage = () => {
  let localStorageData = localStorage.getItem("Names");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
};

const removeFromLocalStorage = (param) => {
  let nameList = getLocalStorage();
  let namedIndex = nameList.indexOf(param);
  nameList.splice(namedIndex, 1);
  localStorage.setItem("Names", JSON.stringify(nameList));
};

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
*/

const saveToLocalStorage = (param) => {
  let nameList = getLocalStorage();
  nameList.push(param);
  localStorage.setItem("Names", JSON.stringify(nameList));
};

const getLocalStorage = () => {
  let localStorageData = localStorage.getItem("Names");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
};

const removeFromLocalStorage = (param) => {
  let nameList = getLocalStorage();
  let namedIndex = nameList.indexOf(param);
  nameList.splice(namedIndex, 1);
  localStorage.setItem("Names", JSON.stringify(nameList));
};

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
