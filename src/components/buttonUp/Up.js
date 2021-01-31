import React from "react";
import styles from "./Up.module.css";
import PropTypes from "prop-types";

const Up = ({ children, scrollUp }) => {
  return (
    <button onClick={scrollUp} type="button" className={styles.scrollUpBtn}>
      {children}
    </button>
  );
};

Up.propTypes = {
  scrollUp: PropTypes.func.isRequired,
};

export default Up;
