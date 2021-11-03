import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Common from "./common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with us"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        />
    </>
  );
};

export default Home;