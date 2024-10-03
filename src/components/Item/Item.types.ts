import { ChangeEvent } from "react";

export interface IItem {
  disabled: boolean;
  value: string;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEdit: () => void;
  removeData?: () => void;
}
