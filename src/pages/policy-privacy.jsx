import React from "react";
import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import PrivacyPolicy from "@components/policy-privacy";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="GHB" />
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default index;
