import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import HomeThere from '../components/home-there'


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle='GHB' />
      <HomeThere />
    </Wrapper>
  );
};

export default index;