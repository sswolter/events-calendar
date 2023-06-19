import { useState } from "react";

interface FormProps {
  toggleForm: () => void;
  day: Date;
}

export const Form = ({ toggleForm, day }: FormProps) => {
  const yyyy = day.toLocaleString("en-US", {
    year: "numeric",
  });

  const mm = day.toLocaleString("en-US", {
    month: "2-digit",
  });

  const dd = day.toLocaleString("en-US", {
    day: "2-digit",
  });

  const [formData, setFormData] = useState({
    title: "",
    startDate: `${yyyy}-${mm}-${dd}`,
    endDate: "",
    location: "",
    label: "",
  });

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />

      <label htmlFor="">Start Date</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />

      <label htmlFor="">End Date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <label htmlFor="label">Label:</label>
      <input
        type="text"
        id="label"
        name="label"
        value={formData.label}
        onChange={handleChange}
      />
      <button type="submit">✓</button>
      <button type="button" onClick={toggleForm}>
        X
      </button>
    </form>
  );
};

export default Form;
