import React from "react";
import Blogbanner from "../components/Blog/Blogbanner";
import Blogsite from "../components/unilist/Blogsite";
import Blogsitetext from "../components/unilist/Blogsitetext";

const About = () => {
  return (
    <>
      <Blogbanner />

      <div className="flex container">
        <Blogsite />
        <Blogsitetext />
      </div>
    </>
  );
};

export default About;
