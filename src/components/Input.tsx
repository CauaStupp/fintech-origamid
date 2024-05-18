import { ComponentProps } from "react";
import styles from './Input.module.css';

interface InputProps extends ComponentProps<"input"> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input type="date" id={id} name={id} {...props} className={styles.input}/>
    </div>
  );
};

export default Input;
