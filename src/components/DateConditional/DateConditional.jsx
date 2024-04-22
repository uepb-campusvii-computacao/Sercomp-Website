import PropTypes from "prop-types";

const DateConditional = ({ until, renderIfTrue, renderIfFalse }) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const compDate = new Date(until);
  compDate.setHours(0, 0, 0, 0);

  const shouldRenderTrue = currentDate <= compDate;

  return <>{shouldRenderTrue ? renderIfTrue : renderIfFalse}</>;
};

DateConditional.propTypes = {
  until: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  renderIfTrue: PropTypes.node.isRequired,
  renderIfFalse: PropTypes.node.isRequired,
};

export default DateConditional;
