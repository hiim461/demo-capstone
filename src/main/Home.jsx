import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import styles from "../assets/styles.module.css";
import Demo from "./Demo";

function Home() {
  return (
    <div className={`${styles.home} `}>
      <Header />
      <Demo />
      <Carousel />
    </div>
  );
}

export default Home;
