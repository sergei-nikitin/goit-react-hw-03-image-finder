import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button" className={styles.loadMoreBtn}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
