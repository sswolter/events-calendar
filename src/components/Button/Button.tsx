import styles from "./Button.module.scss";
type ButtonProps = {
  Props: string;
};

const Button = ({ Props }: ButtonProps) => {
  return <div className={styles.btn}>{Props}</div>;
};

export default Button;
