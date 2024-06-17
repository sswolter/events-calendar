import { IMonth, getDay } from "../../services/dates";
import { IEvent } from "../../services/events";
import Day from "../Day/Day";

interface MonthProps {
  month: IMonth;
  events: IEvent[];
  count: boolean;
  setCount: any;
}

const Month = ({ month, events, count, setCount }: MonthProps) => {
  let dayClass = "date";

  return (
    <>
      {month?.daysInMonth?.map((x, index) => {
        dayClass = x.toLocaleString("en-US", {
          weekday: "short",
        });

        if (x.toString() == getDay().toString()) {
          dayClass = `${dayClass} CurrentDay`;
        }

        return (
          <div className={dayClass} key={index}>
            <Day day={x} events={events} count={count} setCount={setCount} />
          </div>
        );
      })}
    </>
  );
};

export default Month;
