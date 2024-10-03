import { AddItemForm } from "./components/AddItemForm";
import { ItemsList } from "./components/ItemsList";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const App = () => {
  const { storageData, setData, updateData } = useLocalStorage();

  const addData = (value: string) => {
    setData(value);
  };

  const removeData = (key: number) => {
    updateData(storageData.filter((item) => item.id !== key));
  };

  const updateValue = (key: number, newValue: string) => {
    updateData(
      storageData.map((item) =>
        item.id === key ? { ...item, value: newValue } : item
      )
    );
  };

  return (
    <div className="App">
      <AddItemForm addData={addData} />
      <ItemsList
        storageData={storageData}
        removeData={removeData}
        updateValue={updateValue}
      />
    </div>
  );
};
