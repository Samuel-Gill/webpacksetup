import React from "react";
import web from "../src/images/hero-img.png";
import Common from "./common";

const About = () => {
  return (
    <Common
    name="Welcome to About page"
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"
    />
  );
};

export default About;