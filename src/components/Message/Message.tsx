import styles from "./Message.module.css";
import { MessageProps } from "../../types/MessageProps";

export const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className={styles.messageContainer}>
      <h1>{text}</h1>
    </div>
  );
};
