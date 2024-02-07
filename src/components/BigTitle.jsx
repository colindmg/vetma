import PropTypes from "prop-types";

export const BigTitle = ({ textContent, isUppercase = true }) => {
  return (
    <div className="flex items-center">
      <span className="text-xl mr-3 text-vblue">✦</span>
      <h1
        className={`flex items-center text-[60px] max-md:text-[45px] ${
          isUppercase ? "uppercase" : ""
        } font-bold font-avec text-uppercase underline underline-offset-8 decoration-2 text-vblue`}
      >
        {textContent}
      </h1>
      <span className="text-xl ml-3 text-vblue min-md:hidden">✦</span>
    </div>
  );
};

BigTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
  isUppercase: PropTypes.bool,
};
