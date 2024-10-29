import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import HomeFive from "../components/home-five";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="GHB" />
      <HomeFive />
    </Wrapper>
  );
};

export default index;
