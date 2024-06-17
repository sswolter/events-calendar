import { useState } from "react";

import Modal from "../Modal/Modal";
import styles from "./Day.module.scss";
// import { IEvent } from "../../services/events";

interface DayProps {
  day: Date;
  events: any;
  count: boolean;
  setCount: any;
}
const Day = ({ day, events, count, setCount }: DayProps) => {
  const yyyy = day.toLocaleString("en-US", {
    year: "numeric",
  });

  const mm = day.toLocaleString("en-US", {
    month: "2-digit",
  });

  const dd = day.toLocaleString("en-US", {
    day: "2-digit",
  });

  const currentDate = `${yyyy}-${mm}-${dd}`;

  const date = day.toLocaleString("en-US", { day: "numeric" });

  const weekday = day.toLocaleString("en-US", { weekday: "long" });

  const month = day.toLocaleString("en-US", { month: "long" });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const filteredEvents = events.filter((e: any) => e.startDate === currentDate);

  const hasEvent =
    filteredEvents.length != 0
      ? `${styles.Day_Event}`
      : `${styles.Day_NoEvent}`;

  return (
    <div className={styles.Day}>
      <div onClick={toggleModal}>{date}</div>
      <div className={hasEvent}></div>
      {modal && (
        <Modal
          toggleModal={toggleModal}
          day={day}
          date={date}
          weekday={weekday}
          month={month}
          filteredEvents={filteredEvents}
          currentDate={currentDate}
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  );
};

export default Day;
