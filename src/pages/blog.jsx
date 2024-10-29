import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import BlogPage from '@components/blog'

const Blog = () => {
    return (
        <Wrapper>
            <SEO pageTitle="GHB" />
            <BlogPage />
        </Wrapper>
    );
};

export default Blog;