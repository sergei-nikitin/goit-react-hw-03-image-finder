import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import SearchBar from "./components/searchbar";
import GalleryImage from "./components/imageGallery";
import ImageGalleryItem from "./components/imageGalleryItem";
// import Loader from "./components/loaderr";
import Modal from "./components/modal";
import Button from "./components/button";

class App extends Component {
  state = {
    page: 1,
    query: "",
    showModal: false,
  };

  componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {
  //   const prevQuery = prevProps.query;
  //   const nextQuery = this.props.query;
  //   if (prevQuery !== nextQuery) {
  //     this.fetchImages(nextQuery, this.state.page);
  //   }
  // }

  // fetchImages(query, page) {
  //    this.setState({ isLoading: rtue })
  //   return fetch(
  //     `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then((response) => response.json())
  //     .then((res) => res.hits)
  //     .then((hits) =>
  //       this.setState((prevState) => ({
  //         foto: [...prevState.foto, ...hits],
  //         page: prevState.page + 1,
  //       }))
  //     )
  //     .cath((error) => this.setState({ error }))
  //     .finaly(() => {
  //       this.setState({ isLoading: false });
  //     });
  // }

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState({ page: +1 });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <GalleryImage query={this.state.query} page={this.state.page} />

        {this.state.query.length > 0 && <Button onLoadMore={this.loadMore} />}

        {/* <Loader></Loader> */}

        {this.showModal && (
          <Modal onClose={this.toogleModal}>
            <ImageGalleryItem></ImageGalleryItem>
          </Modal>
        )}

        {/* <ToastContainer autoClose={2500} /> */}
      </div>
    );
  }
}

export default App;
