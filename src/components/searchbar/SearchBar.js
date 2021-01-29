import React, { Component } from "react";
// import { toast } from "react-toastify";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      return alert("Введите название");
      // return toast.error("Введите название");
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
            name="value"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
