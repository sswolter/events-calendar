import { Month } from "../../services/dateService";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

type Props = {
  monthState: Month;
};

const Header = ({ monthState }: Props) => {
  console.log(monthState.year);
  return (
    <div className={styles.header}>
      <h1>
        {monthState.monthString} {monthState.year}
      </h1>
      <div className={styles.header_btns}>
        <Button Props={"<"} />
        <Button Props={"Today"} />
        <Button Props={">"} />
      </div>
    </div>
  );
};

export default Header;
