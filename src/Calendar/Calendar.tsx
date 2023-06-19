import { useEffect, useState } from "react";
import {
  Month,
  getDay,
  getMonth,
  getToday,
  nextMonth,
  previousMonth,
} from "../service";
import "../App.css";

import Cell from "../Cell/Cell";

const Weekdays = () => {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      {days.map((x: string) => {
        return <div key={x}>{x}</div>;
      })}
    </>
  );
};

interface MonthProps {
  month: Month;
}
const CurrentMonth = ({ month }: MonthProps) => {
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
            <Cell day={x} />
          </div>
        );
      })}
    </>
  );
};

const Calendar = () => {
  const [month, setMonth] = useState<Month>({
    firstDayOfMonth: new Date(),
    date: 1,
    month: 1,
    monthString: "January",
    year: 2023,
    daysInMonth: [],
    numberOfDays: 31,
  });

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
    <div>
      <div className="header">
        <div>
          {month?.monthString} {month?.year}
        </div>
        <div>
          <button onClick={getPreviousMonth}>{"<"}</button>
          <button onClick={getCurrentMonth}>{"Today"}</button>
          <button onClick={getNextMonth}>{">"}</button>
        </div>
      </div>
      <div className="grid">
        <Weekdays />
        <CurrentMonth month={month} />
      </div>
    </div>
  );
};

export default Calendar;
