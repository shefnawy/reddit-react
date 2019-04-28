import React from "react";
import "./App.css";
import Header from "./Home-Components/Header";
import Content from "./Home-Components/Content/Content";
import Footer from "./Home-Components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
