import { useState } from "react";
import "../App.css";
import Form from "../Form/Form";
import { nthNumber } from "../service";

interface ModalProps {
  toggleModal: () => void;
  day: Date;
}
const Modal = ({ toggleModal, day }: ModalProps) => {
  const weekday = day.toLocaleString("en-US", { weekday: "long" });
  const month = day.toLocaleString("en-US", { month: "long" });
  const date = day.toLocaleString("en-US", { day: "numeric" });

  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };
  return (
    <div className="modal">
      <button onClick={toggleModal}>X</button>
      <div className="modal_day">
        {weekday}
        <div className="modal_date">
          {month} {date}
          {nthNumber(date)}
        </div>
      </div>

      <div onClick={toggleForm} className="addEvent">
        + add event
      </div>
      {form && <Form toggleForm={toggleForm} day={day} />}
    </div>
  );
};

interface CellProps {
  day: Date;
}
const Cell = ({ day }: CellProps) => {
  const dayNumber = day.toLocaleString("en-US", { day: "numeric" });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div onClick={toggleModal}>{dayNumber}</div>
      {modal && <Modal toggleModal={toggleModal} day={day} />}
    </>
  );
};

export default Cell;
