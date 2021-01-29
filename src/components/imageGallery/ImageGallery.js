import React, { Component } from "react";
// import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem";
import styles from "./ImageGallery.module.css";
import { KEY, BASE_URL } from "../../variables";

export default class GalleryImage extends Component {
  state = {
    foto: [],
    // page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const nextPage = this.props.page;
    const prevPage = prevProps.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ loading: true });
      return fetch(
        `${BASE_URL}?q=${nextQuery}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((res) => res.hits)
        .then((hits) =>
          this.setState((prevState) => ({
            foto: [...prevState.foto, ...hits],
            // page: prevState.page + 1,
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <ul className={styles.galleryList}>
        {this.state.foto.map((element) => (
          <ImageGalleryItem
            largeImageURL={element.largeImageURL}
            src={element.previewURL}
            key={element.id}
            id={element.id}
            webformatURL={element.webformatURL}
            onImageClick={this.onImageClick}
          />
        ))}
      </ul>
    );
  }
}

// GalleryImage.propTypes = {
//   foto: PropTypes.array.isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };

// export default GalleryImage;

// export default class GetImages extends Component {
//   state = {
//     foto: [],
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevProps.query;
//     const nextQuery = this.props.query;
//     // const nextPage = this.props.page;
//     // const prevPage = prevProps.page;

//     if (prevQuery !== nextQuery) {
//       this.setState({ loading: true });
//       return fetch(
//         `${BASE_URL}?q=${nextQuery}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(new Error(`Нет фото в категории ${nextQuery}`));
//         })
//         .then((res) => res.hits)
//         .then((hits) => {
//           this.setState((prevState) => ({
//             foto: [...prevState.foto, ...hits],
//             page: prevState.page + 1,
//           }));
//           // return this.setState({ foto });
//         })

//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { loading, foto, error } = this.state;
//     return (
//       <div>
//         {error && <p>{error.message}</p>}
//         {loading && <p>Загружаем фото...</p>}
//         {!foto && <p>Введите название фото</p>}
//         {foto.lenght > 0 && (
//           <ul className={styles.galleryList}>
//             {foto.map((f) => (
//               <li className={styles.galleryItem} key={f.id}>
//                 <img
//                   className={styles.image}
//                   src={f.previewURL}
//                   alt={f.user}
//                 ></img>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }
