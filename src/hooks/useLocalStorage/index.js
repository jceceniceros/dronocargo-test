import { useState } from 'react';

const serializeData = (data) => JSON.stringify(data);
const unserializeData = (serializedData) => JSON.parse(serializedData);

const retrieveData = (localStorageKey) => {
  const serializedData = localStorage.getItem(localStorageKey);
  return unserializeData(serializedData);
};

const storeData = (localStorageKey, data) => {
  const serializedData = serializeData(data);
  localStorage.setItem(localStorageKey, serializedData);
}

const useLocalStorage = (localStorageKey, initialState) => {
  if (localStorage.getItem(localStorageKey) === null) {
    storeData(localStorageKey, initialState)
  }

  const [data, setData] = useState(retrieveData(localStorageKey));

  const saveData = (newData) => {
    storeData(localStorageKey, newData);
    setData(newData);
  }

  const getData = () => retrieveData(localStorageKey)

  return [data, saveData, getData];
};

export default useLocalStorage;
