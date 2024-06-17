import { useState } from "react";
import { IEvent, deleteById, updateEvent } from "../../services/events";
import styles from "./EventID.module.scss";

interface EventIDCardProps {
  event: IEvent;
  count: boolean;
  setCount: any;
  toggleModal: () => void;
}

const Event = ({ event, count, setCount, toggleModal }: EventIDCardProps) => {
  const handleClick = async () => {
    try {
      await deleteById(event.id);
      setCount(!count);
    } catch (e) {
      console.log(e);
    }
  };

  const initialState = {
    id: event.id,
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    label: event.label,
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      setError(true);
      setErrorMessage("End date cannot be before start date");
      return;
    }

    try {
      if (error) {
        setError(false);
        setErrorMessage("");
      }
      await updateEvent(formData, formData.id);
      toggleModal();
    } catch (e) {
      setError(true);
      setErrorMessage((e as Error).message);
      console.log(e);
    }

    setCount(!count);
  };

  return (
    <div className={styles.ID}>
      <div className={styles.Close} onClick={toggleModal}>
        <img src="../../assets/close-sm-svgrepo-com.svg" alt="close" />
      </div>

      <div className={styles.EventInfo}>
        <form onSubmit={handleSubmit}>
          <div className={styles.EventInfo_T}>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.EventInfo_Date}>
            <div className={styles.EventInfo_Lo}>
              <img
                className={styles.EventInfo_I}
                src="../../assets/calendar-event-svgrepo-com.svg"
                alt="start date"
              />
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <p>⇒</p>
            <div className={styles.EventInfo_Lo}>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.EventInfo_Lo}>
            <img
              className={styles.EventInfo_I}
              src="../../assets/location-1-svgrepo-com.svg"
              alt="location"
            />
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className={styles.EventInfo_Lo}>
            <img
              className={styles.EventInfo_I}
              src="../../assets/label-svgrepo-com.svg"
              alt="label"
            />
            <input
              type="text"
              id="label"
              name="label"
              value={formData.label}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.Btn}>
            <button type="submit" className={styles.Btn_Ac}>
              Update
            </button>
            <button onClick={handleClick}>Delete</button>
          </div>
        </form>
        {error && (
          <p className={styles.Error}>
            <img src="../../assets/error-svgrepo-com.svg" alt="" />
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Event;
