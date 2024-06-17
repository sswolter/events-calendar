import styles from "./Weekday.module.scss";
const Weekdays = () => {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      {days.map((x: string) => {
        return (
          <div key={x} className={styles.Days}>
            {x}
          </div>
        );
      })}
    </>
  );
};

export default Weekdays;
