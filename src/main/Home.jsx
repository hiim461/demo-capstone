import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import styles from "../assets/styles.module.css";

function Home() {
  return (
    <div className={`${styles.home} `}>
      <Header />
      <Carousel />
    </div>
  );
}

export default Home;
