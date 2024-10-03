import { useState, useEffect, useCallback } from "react";
import { IStorageData } from "../types/storage-data";

const useLocalStorage = () => {
  const [storageData, setStorageData] = useState<IStorageData[]>([]);

  const setData = (input: string) => {
    const preparedData = [
      {
        id: Date.now(),
        value: input,
      },
      ...storageData,
    ];

    localStorage.setItem("data", JSON.stringify(preparedData));
    getStorage();
  };

  const updateData = useCallback((value: IStorageData[]) => {
    try {
      localStorage.setItem("data", JSON.stringify(value));
      getStorage();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStorage = () => {
    try {
      const savedData = localStorage.getItem("data");
      if (savedData) {
        setStorageData(JSON.parse(savedData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  return { storageData, setData, updateData };
};

export { useLocalStorage };
