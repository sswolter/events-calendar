import { useState } from "react";
import { addNewEvent } from "../../services/events";
import styles from "./Form.module.scss";

interface FormProps {
  currentDate: string;
  toggleForm: () => void;
  count: boolean;
  setCount: any;
}
const Form = ({ currentDate, toggleForm, count, setCount }: FormProps) => {
  const initialState = {
    title: "",
    startDate: currentDate,
    endDate: currentDate,
    location: "",
    label: "",
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
    setCount(!count);

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

      await addNewEvent(formData);
    } catch (e) {
      setError(true);
      setErrorMessage((e as Error).message);
      console.log(e);
    }
  };

  return (
    <div>
      {error && (
        <p className={styles.Error}>
          <img src="../../assets/error-svgrepo-com.svg" alt="" />
          {errorMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.Input}>
          <label>Event Name: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.Input}>
          <label>Start Date: </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.Input}>
          <label>End Date: </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            value={formData.startDate}
            required
          />
        </div>

        <div className={styles.Input}>
          <label>Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.Input}>
          <label>Label: </label>
          <input
            type="text"
            id="label"
            name="label"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.Btn}>
          <button type="submit" className={styles.Btn_Ac}>
            Create
          </button>
          <button type="button" onClick={toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
