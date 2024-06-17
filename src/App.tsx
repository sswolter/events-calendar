import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./containers/Calendar/Calendar";
import Filters from "./containers/Filters/Filters";
import { useEffect, useState } from "react";
import { IEvent, getAllEvents } from "./services/events";
import styles from "./App.module.scss";
// import Single from "./containers/Single/Single";

function App() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [count, setCount] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      setEvents(await getAllEvents());
    };

    getEvents();
  }, [count]);

  return (
    <main className={styles.Main}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Calendar events={events} count={count} setCount={setCount} />
            }
          />
          <Route
            path="/events"
            element={
              <Filters events={events} count={count} setCount={setCount} />
            }
          />

          {/* <Route
            path="/events/:id"
            element={
              <Single events={events} count={count} setCount={setCount} />
            }
          /> */}
        </Routes>

        <nav className={styles.Filter}>
          <NavLink to="/events">
            <img src="./assets/menu-svgrepo-com.svg" alt="nav" />
          </NavLink>
        </nav>
      </BrowserRouter>
    </main>
  );
}

export default App;
