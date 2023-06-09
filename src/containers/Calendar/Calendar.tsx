import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Month, getMonth, getToday } from "../../services/dateService";
import Grid from "../Grid/Grid";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [monthState, setMonthState] = useState<Month>({
    firstDayOfMonth: new Date(),
    date: 1,
    month: 1,
    monthString: "January",
    year: 2023,
    daysInMonth: [],
    numberOfDays: 31,
  });
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(getToday());
    setMonthState(getMonth(getToday()));
  }, []);

  console.log(monthState);
  console.log(today);

  return (
    <div className={styles.calendar}>
      <Header monthState={monthState} />
      <Grid monthState={monthState} />
    </div>
  );
};

export default Calendar;
