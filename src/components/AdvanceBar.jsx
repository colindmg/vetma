import PropTypes from "prop-types";

const AdvanceBar = (props) => {
  return (
    <div className="fixed z-[1000] h-1 top-16 left-1/2 transform -translate-x-1/2 bg-gray-200 w-[400px] rounded-lg">
      <div
        className="absolute top-0 left-0 h-1 bg-darkgray rounded-lg"
        style={{ width: `${props.advancement}%` }}
      ></div>
    </div>
  );
};

export default AdvanceBar;

AdvanceBar.propTypes = {
  advancement: PropTypes.number,
};
