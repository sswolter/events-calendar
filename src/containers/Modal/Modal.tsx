import { ordinal } from "../../services/dates";
import EventCard from "../Event/EventCard";
import styles from "./Modal.module.scss";
import { IEvent } from "../../services/events";
import Form from "../Form/Form";
import { useState } from "react";

interface ModalProps {
  day: Date;
  toggleModal: () => void;
  date: string;
  weekday: string;
  month: string;
  filteredEvents: [];
  currentDate: string;
  count: boolean;
  setCount: any;
}
const Modal = ({
  toggleModal,
  date,
  weekday,
  month,
  filteredEvents,
  currentDate,
  count,
  setCount,
}: ModalProps) => {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.Modal_Content}>
        <div className={styles.Modal_Header}>
          <div className={styles.Modal_Button}>
            {/* <button onClick={toggleModal}>X</button> */}
            <div className={styles.Close} onClick={toggleModal}>
              <img src="../../assets/close-sm-svgrepo-com.svg" alt="close" />
            </div>
          </div>
          <div className={styles.Modal_Day}>
            {weekday}
            <div className={styles.Modal_Date}>
              {month} {date}
              {ordinal(date)}
            </div>
            <p className={styles.Link} onClick={toggleForm}>
              + add event
            </p>
            {form && (
              <Form
                currentDate={currentDate}
                toggleForm={toggleForm}
                count={count}
                setCount={setCount}
              />
            )}
          </div>
        </div>

        {filteredEvents.map((event: IEvent) => {
          return (
            <EventCard
              event={event}
              key={event.id}
              count={count}
              setCount={setCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
