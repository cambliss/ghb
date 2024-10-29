import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Team from '@components/team'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="GHB" />
            <Team />
        </Wrapper>
    );
};

export default index;