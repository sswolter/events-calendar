export interface IEvent {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  label: string;
  id: number;
}

export const getAllEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  return await response.json();
};

export const deleteById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Event could not be deleted`);
  }
  // console.log("deleted");
};

export const addNewEvent = async (eventData: object) => {
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Could not create event");
  }
  // console.log("created");
  // console.log(eventData);
};

export const updateEvent = async (eventData: object, id: number) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PATCH",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Could not update event");
  }
  // console.log("updated");
  // console.log(eventData);
};

export const findById = async (id: string | undefined) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  return await response.json();
};
