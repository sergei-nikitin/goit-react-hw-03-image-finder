import { Component } from "react";
import { KEY, BASE_URL } from "./variables";

// import styles from './ImageGallery.module.css';

export default class GetImages extends Component {
  state = {
    foto: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, precState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      return fetch(
        `${BASE_URL}?q=${nextQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нет фото в категории ${nextQuery}`));
        })
        .then((foto) => this.setState({ foto }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, foto, error } = this.state;
    return (
      <div>
        {error && <p>{error.message}</p>}
        {loading && <p>Загружаем фото...</p>}
        {!foto && <p>Введите название фото</p>}
        {foto && (
          //   foto && console.log(foto.hits)
          <ul>
            {foto.hits.map((f) => (
              <li key={f.id}>
                <img src={f.previewURL} alt={f.user}></img>
                <p>User: {f.user}</p>
                <p></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
