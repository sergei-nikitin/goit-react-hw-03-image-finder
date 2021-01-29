import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, src, largeImageURL, onClickImage }) => {
  return (
    <li className={styles.item} key={id}>
      <img
        className={styles.img}
        src={src}
        id={id}
        data-source={largeImageURL}
        onClick={onClickImage}
        alt=""
      ></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
