import React, { Component } from "react";
import { toast } from "react-toastify";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { ReactComponent as IconSearch } from "../../icons/search-outline.svg";

class SearchBar extends Component {
  state = {
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      return toast.error("Введите категорию фото ");
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
            <IconSearch width="30" height="30" />
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
