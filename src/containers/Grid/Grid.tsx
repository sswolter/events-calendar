import Cell from "../../components/Cell/Cell";
import Weekdays from "../../components/Weekdays/Weekdays";
import { Month } from "../../services/dateService";
import styles from "./Grid.module.scss";

type Props = {
  monthState: Month;
};
const Grid = ({ monthState }: Props) => {
  return (
    <div className={styles.Grid}>
      <Weekdays />
      {monthState?.daysInMonth?.map((x, index) => {
        const dayClass = x.toLocaleString("en-US", {
          weekday: "short",
        });
        return (
          <div key={index} className={dayClass}>
            <Cell day={x} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
