import { nameStorage } from './constants';

export const getStorage = () => {
  const storage = localStorage.getItem(nameStorage);
  return JSON.parse(storage);
};

export const getStorageItem = (item) => {
  const storage = getStorage(nameStorage);
  return storage[item];
};

export const setDefaultStorage = () => {
  const data = {
    persona: {},
    profile: [],
    health: [],
    modality: [],
    challenge: [],
    muscle: [],
  };
  
  updateStorage(data);
};

export const updateStorage = (data) => {
  localStorage.setItem(nameStorage, JSON.stringify(data));
};

export const savePersona = (person) => {
  const storage = getStorage();

  const persona = {
    ...storage.persona,
    ...person
  }

  const newData = {
    ...storage,
    persona
  };
  updateStorage(newData);
};

export const saveResponseWorld = (world, response) => {
  const storage = getStorage();

  storage[world].push(response);
  updateStorage(storage);
}