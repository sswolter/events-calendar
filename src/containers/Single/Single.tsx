import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Event/EventID.module.scss";
import { IEvent, deleteById, findById } from "../../services/events";

interface SingleProps {
  events: IEvent[];
  count: any;
  setCount: any;
}

const Single = ({ events, count, setCount }: SingleProps) => {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(events);

  useEffect(() => {
    const wrapper = async () => {
      try {
        const e = await findById(id);
        setEvent(e);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    wrapper();
  }, [count]);

  console.log(event);

  const close = () => {
    navigate("/");
  };

  const initialState = {
    id: event?.id,
    title: event?.title,
    startDate: event?.startDate,
    endDate: event?.endDate,
    location: event?.location,
    label: event?.label,
  };
  const [formData, setFormData] = useState(undefined);
  console.log(formData);

  useEffect(() => {
    setFormData(initialState);
  }, []);

  console.log(formData);

  const handleDelete = async () => {
    if (event) {
      try {
        await deleteById(event.id);
        setCount(!count);
        navigate(-1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (event && !error) {
    console.log("here");
    return (
      <div>
        <button onClick={close}>back</button>
        {event?.id}
        <h1>{event?.title}</h1>
        <p>{event?.location}</p>
        <button onClick={handleDelete}>Delete</button>
        <form action="">
          <p>title</p>
          <input
            type="text"
            id="title"
            name="title"
            value={formData?.title}
            // onChange={}
          />
        </form>
      </div>
    );
  } else {
    console.log("not");
    return <div>No event</div>;
  }
};

export default Single;
