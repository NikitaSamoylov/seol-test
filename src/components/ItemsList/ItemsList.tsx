import { ChangeEvent, useState } from "react";
import { IStorageData } from "../../types/storage-data";
import { Item } from "../Item/Item";
import styles from "./ItemsList.module.css";

interface IItemsList {
  storageData: IStorageData[];
  removeData: (key: number) => void;
  updateValue: (key: number, newValue: string) => void;
}

export const ItemsList: React.FC<IItemsList> = ({
  storageData,
  removeData,
  updateValue,
}) => {
  const [isEdit, setIsEdit] = useState(0);
  const [newValue, setNewValue] = useState("");

  const handleEdit = (id: number) => {
    if (isEdit && newValue) {
      updateValue(id, newValue);
      setIsEdit(0);
    }

    setIsEdit(isEdit ? 0 : id);
  };

  const handleNewValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  };

  const listItems =
    storageData.length !== 0 &&
    storageData.map((item) => (
      <Item
        key={item.id}
        disabled={isEdit === item.id ? false : true}
        value={isEdit === item.id ? newValue : item.value}
        action={(e) => handleNewValue(e)}
        handleEdit={() => handleEdit(item.id)}
        removeData={() => removeData(item.id)}
      />
    ));

  return (
    <div className="container">
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};
