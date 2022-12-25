import styles from "./SubmitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div className={styles.btn}>{text}</div>
  );
}

export default SubmitButton;
