import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";

export const deleteAllLocalStorageItems = () => {
  Object.keys(LOCAL_STORAGE_KEYS).forEach((k: string) => {
    deleteStorageItemsForPage(k);
  });
};

export const deleteStorageItemsForPage = (page: string) => {
  Object.keys(LOCAL_STORAGE_KEYS[page]).forEach((k: string) => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS[page][k]);
  });
};
