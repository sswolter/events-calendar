import "./Cell.css";
type Props = {
  day: Date;
};
const Cell = ({ day }: Props) => {
  const date = day.toLocaleString("en-US", {
    day: "numeric",
  });
  return <div>{date}</div>;
};

export default Cell;
