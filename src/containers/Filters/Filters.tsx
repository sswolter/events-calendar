import EventCard from "../Event/EventCard";
import { IEvent } from "../../services/events";
import { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import { useNavigate } from "react-router-dom";

interface FiltersProps {
  events: IEvent[];
  count: boolean;
  setCount: boolean;
}
const Filters = ({ events, count, setCount }: FiltersProps) => {
  const allLabels = events.map((event: IEvent) => event.label);
  const allLocations = events.map((event: IEvent) => event.location);

  const uniqueLabels = [...new Set(allLabels)];
  const uniqueLocations = [...new Set(allLocations)];

  const [selectedLabel, setSelectedLabel] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const navigate = useNavigate();

  const handleLabelChange = (e: any) => {
    setSelectedLabel(e.target.value);
  };

  const handleLocationChange = (e: any) => {
    setSelectedLocation(e.target.value);
  };

  useEffect(() => {}, [events, count, selectedLabel, allLabels, allLocations]);

  const filter = events.filter((event) => {
    if (selectedLocation && selectedLabel) {
      return (
        event.location === selectedLocation && event.label === selectedLabel
      );
    } else if (selectedLocation) {
      return event.location === selectedLocation;
    } else if (selectedLabel) {
      return event.label === selectedLabel;
    } else {
      return events;
    }
  });

  const handleClearFilters = () => {
    setSelectedLabel("");
    setSelectedLocation("");
  };

  const openFilter = () => {
    navigate(-1);
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.Label}>
        <h2 className={styles.h2}>Filters</h2>
        <div>
          <h3>Label</h3>
          <p>clear</p>
        </div>
        {uniqueLabels.map((label) => (
          <label key={label} className={styles.Label_1}>
            <input
              type="radio"
              value={label}
              checked={selectedLabel === label}
              onChange={handleLabelChange}
            />
            <p>{label}</p>
          </label>
        ))}
        <div>
          <h3>Location</h3>
          <p>clear</p>
        </div>

        {uniqueLocations.map((local) => (
          <label key={local} className={styles.Label_1}>
            <input
              type="radio"
              value={local}
              checked={selectedLocation === local}
              onChange={handleLocationChange}
            />
            <p>{local}</p>
          </label>
        ))}
        <button onClick={handleClearFilters}>Clear</button>
        <button onClick={openFilter}>Back</button>
      </div>
      <div className={styles.Filter_2}>
        {filter.length != 0 ? (
          filter.map((event) => (
            <div key={event.id} className={styles.Event}>
              <EventCard event={event} count={count} setCount={setCount} />
            </div>
          ))
        ) : (
          <div className={styles.Event}>
            <p>No events</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
