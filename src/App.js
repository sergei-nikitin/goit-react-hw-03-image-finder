import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import SearchBar from "./components/searchbar";
import GalleryImage from "./components/imageGallery";
// import Loader from "./components/loaderr";
import Modal from "./components/modal";
import Button from "./components/button";
import Up from "./components/buttonUp";

class App extends Component {
  state = {
    page: 1,
    query: "",
    showModal: false,
    largeImageURL: "",
  };

  componentDidMount() {
    this.scrollDown();
  }
  componentDidUpdate() {
    this.scrollDown();
  }

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImgUrl = (query) => {
    this.setState({ largeImageURL: query });
    this.setState({ showModal: true });
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
    this.setState({ page: 1 });
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  scrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <GalleryImage
          query={this.state.query}
          page={this.state.page}
          scrollDown={this.scrollDown}
          getLargeImgUrl={this.getLargeImgUrl}
        />

        {this.state.query.length > 0 && <Button onLoadMore={this.loadMore} />}
        {this.state.query.length > 0 && <Up scrollUp={this.scrollUp} />}

        {this.state.showModal && (
          <Modal
            onClose={this.toogleModal}
            large={Object.values(this.state.largeImageURL)}
          ></Modal>
        )}

        {/* <ToastContainer autoClose={2500} /> */}
      </div>
    );
  }
}

export default App;
