import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddItemForm.module.css";

interface IAddItemProps {
  addData: (value: string) => void;
}

export const AddItemForm: React.FC<IAddItemProps> = ({ addData }) => {
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addData(input);
    setInput("");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          type="text"
          className={styles.form__field}
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button className={styles.form__btn}>Добавить</button>
      </form>
    </div>
  );
};
