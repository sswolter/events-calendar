import styles from "./EventCard.module.scss";
import { IEvent } from "../../services/events";
import EventID from "./EventID";
import { useState } from "react";
// import { NavLink } from "react-router-dom";

interface EventCardProps {
  event: IEvent;
  count: boolean;
  setCount: boolean;
}
const EventCard = ({ event, count, setCount }: EventCardProps) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* <NavLink to={`/events/${event.id}`}> */}
      <div className={styles.Card} onClick={toggleModal}>
        <h3 className={styles.Card_Title}>{event.title}</h3>
        <p className={styles.Card_Location}>
          <img
            className={styles.Card_Img}
            src="../../assets/location-1-svgrepo-com.svg"
            alt="location"
          />
          {event.location}
        </p>
        <div className={styles.Label}>
          <span className={styles.Label_C}>{event.label}</span>
        </div>
      </div>
      {modal && (
        <EventID
          event={event}
          count={count}
          setCount={setCount}
          toggleModal={toggleModal}
        />
      )}
      {/* </NavLink> */}
    </>
  );
};

export default EventCard;
