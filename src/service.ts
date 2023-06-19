export interface Month {
  firstDayOfMonth: Date;
  date: number;
  month: number;
  monthString: string;
  year: number;
  numberOfDays: number;
  daysInMonth: Date[];
}

const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const getMonth = (d: Date) => {
  const date = d.getDate();
  const month = d.getMonth();
  const monthString = d.toLocaleString("en-US", {
    month: "long",
  });
  const year = d.getFullYear();
  const numberOfDays = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = getDaysInMonth(year, month);

  return {
    firstDayOfMonth,
    date,
    month,
    monthString,
    year,
    numberOfDays,
    daysInMonth,
  };
};

export const nextMonth = (year: number, month: number) => {
  return new Date(year, month + 1);
};

export const previousMonth = (year: number, month: number) => {
  return new Date(year, month - 1);
};

export const getToday = () => new Date();

export const getDay = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const nthNumber = (number: any) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
