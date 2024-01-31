import PropTypes from "prop-types";

export const CrayText = ({ textContent }) => {
  return (
    <div className="cray-container absolute bottom-14">
      <a className="font-avec cray-text text-xl text-white" href="">
        {textContent}
      </a>
    </div>
  );
};

CrayText.propTypes = {
  textContent: PropTypes.string.isRequired,
};
