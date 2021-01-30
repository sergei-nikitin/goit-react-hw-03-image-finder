import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem";
import Loader from "../loaderr";
import styles from "./ImageGallery.module.css";
import { KEY, BASE_URL } from "../../variables";

export default class GalleryImage extends Component {
  state = {
    foto: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const nextPage = this.props.page;
    const prevPage = prevProps.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      if (prevQuery !== nextQuery) {
        this.setState({ foto: [] });
      }
      this.setState({ loading: true });
      return fetch(
        `${BASE_URL}?q=${nextQuery}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((res) => res.hits)
        .then((hits) =>
          this.setState((prevState) => ({
            foto: [...prevState.foto, ...hits],
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    this.props.scrollDown();
  }

  onClickImage = (url) => {
    this.props.getLargeImgUrl(url);
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}

        <ul className={styles.galleryList}>
          {this.state.foto.map((element) => (
            <ImageGalleryItem
              src={element.webformatURL}
              key={element.id}
              id={element.id}
              largeImageURL={element.largeImageURL}
              onClickImage={this.onClickImage}
            />
          ))}
        </ul>
      </div>
    );
  }
}

GalleryImage.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  scrollDown: PropTypes.func.isRequired,
  getLargeImgUrl: PropTypes.func.isRequired,
};
