import Home from "@components/home";
import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import Movie from './movie-film'
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Main"} />
      {/* <Home /> */}
      <Movie/>
    </Wrapper>
  );
};

export default index;
