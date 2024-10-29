import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import BlogDetailsPage from "@components/blog-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="GHB" />
      <BlogDetailsPage />
    </Wrapper>
  );
};

export default index;
