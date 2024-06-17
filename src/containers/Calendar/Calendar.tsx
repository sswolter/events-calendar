import { useEffect, useState } from "react";
import {
  IMonth,
  getMonth,
  getToday,
  nextMonth,
  previousMonth,
} from "../../services/dates";
import Weekdays from "../Weekdays/Weekdays";
import Month from "../Month/Month";
import styles from "./Calendar.module.scss";
import { IEvent } from "../../services/events";

interface CalendarProps {
  events: IEvent[];
  count: boolean;
  setCount: any;
}
const Calendar = ({ events, count, setCount }: CalendarProps) => {
  const initalState = {
    firstDayOfMonth: new Date(),
    date: 0,
    month: 0,
    monthString: "",
    year: NaN,
    daysInMonth: [],
    numberOfDays: 31,
  };

  const [month, setMonth] = useState<IMonth>(initalState);

  useEffect(() => {
    setMonth(getMonth(getToday()));
  }, []);

  const getNextMonth = () => {
    const m = nextMonth(month.year, month.month);
    setMonth(getMonth(m));
  };

  const getPreviousMonth = () => {
    const m = previousMonth(month.year, month.month);
    setMonth(getMonth(m));
  };

  const getCurrentMonth = () => {
    setMonth(getMonth(getToday()));
  };

  return (
    <>
      <div className={styles.Calendar}>
        <div className={styles.Header}>
          <div className={styles.Header_Month}>
            {month?.monthString} {month?.year}
          </div>
          <div className={styles.Header_Buttons}>
            <button onClick={getPreviousMonth}>{"<"}</button>
            <button onClick={getCurrentMonth}>{"Today"}</button>
            <button onClick={getNextMonth}>{">"}</button>
          </div>
        </div>
        <div className="grid">
          <Weekdays />
          <Month
            month={month}
            events={events}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
      <div>
        <p className={styles.Div}>✼ •• ┈┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈┈ •• ✼</p>
      </div>
    </>
  );
};

export default Calendar;
