import { DateConditionalProps } from "../../types/DateConditionalProps";

const DateConditional: React.FC<DateConditionalProps> = ({ until, renderIfTrue, renderIfFalse }) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const compDate = new Date(until);
  compDate.setHours(0, 0, 0, 0);

  const shouldRenderTrue = currentDate <= compDate;

  return <>{shouldRenderTrue ? renderIfTrue : renderIfFalse}</>;
};

export default DateConditional;
