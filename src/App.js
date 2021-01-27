import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import SearchBar from "./components/searchbar";
import GetImages from "./components/imageGallery";
import ImageGalleryItem from "./components/imageGalleryItem";
// import Loader from "./components/loaderr";
import Modal from "./components/modal";
// import Button from "./components/button";

class App extends Component {
  state = {
    query: "",
    // foto: null,
    showModal: false,
  };

  componentDidMount() {}

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <GetImages query={this.state.query}></GetImages>

        {this.showModal && (
          <Modal onClose={this.toogleModal}>
            <ImageGalleryItem></ImageGalleryItem>
          </Modal>
        )}
        {this.state.foto && console.log(this.state.foto)}

        {/* <ToastContainer autoClose={2500} /> */}
      </div>
    );
  }
}

export default App;
