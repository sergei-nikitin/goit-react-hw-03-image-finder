import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

export default class App extends Component {
  render() {
    return (
      <Loader
        className={styles.loader}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
