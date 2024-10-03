import { IItem } from "./Item.types";
import styles from "./Item.module.css";

export const Item: React.FC<IItem> = ({
  disabled,
  value,
  action,
  handleEdit,
  removeData,
}) => {
  return (
    <li className={styles.item}>
      <input
        disabled={disabled}
        type="text"
        value={value}
        className={styles.item__title}
        onChange={(e) => action(e)}
      />
      <div className={styles.news__btns}>
        <button
          id="secondary_btn"
          className={styles.item__btn}
          onClick={handleEdit}
        >
          Изменить
        </button>
        <button
          id="secondary_btn"
          className={styles.item__btn}
          onClick={removeData}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};
