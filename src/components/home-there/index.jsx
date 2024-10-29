import { Header } from "@layout/index";
import React from "react";
import HeroThere from "./hero-there";
import HomeAboutThere from "@components/abouts/home-about-there";
import MovieSliderOne from "@components/elements/slider/movie-slider/movie-slider-one";

import ServiceSectionThere from "./service-section-there";
import VideoSectionThere from "./video-section-there";
import TeamSectionThere from "./team-section-there";
import TestimonialSliderOne from "@components/elements/slider/testimonial-slider/testimonial-slider-one";
import BrandAreaSection from "@components/elements/slider/brand-slider/brand-slider-one";
import ContactAreaTwo from "./contact-area-two";
import FooterTwo from "@layout/footers/footer-two";
import BlogSectionThere from "./blog-section-there";
import FooterOne from "@layout/footers/footer-one";
import AboutSection from "@components/abouts/home-about-one";
import HeroOne from "@components/elements/slider/hero-slider/hero-one";
import HeroTwo from "@components/home-two/hero-two";
const index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroThere />
        <HomeAboutThere />
        <MovieSliderOne />
  
      

<AboutSection/>

        <ServiceSectionThere />
        <VideoSectionThere />
        <TeamSectionThere />
      
        {/* <TestimonialSliderOne /> */}
        {/* <BlogSectionThere /> */}
        <BrandAreaSection
          brandWrapperClass="brand-area section-spacing-bottom"
          borderClass="fm-brand"
        />
        {/* <ContactAreaTwo /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default index;
