import HomeAboutFour from '@components/abouts/home-about-four';
import HeroSliderTwo from '@components/elements/slider/hero-slider/hero-slider-two';
import { Header } from '@layout/index';
import React,{useState,useEffect} from 'react';
import HistorySectionFour from './history-section-four';
import PortFolioSectionFour from './portfolio-section-four';
import TestimonialSliderTwo from '@components/elements/slider/testimonial-slider/testimonial-slider-two';
import VideoSectionFour from './video-section-four';
import BlogSectionFour from './blog-section-four';
import CertificateSlider from '@components/elements/slider/certificate-slider';
import ContactSection from '@components/common/contact/contact-area';
import FooterOne from '@layout/footers/footer-one';
import TeamSectionThere from '@components/home-there/team-section-there';

import Vediosectionthree from '@components/home-two/video-area-section'
const index = () => {

  const [bgColor, setBgColor] = useState('#5E9CEB'); // Initial background color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Change background color based on scroll position
      if (scrollPosition < 400) {
        setBgColor('#5E9CEB'); // Initial color
      } else if (scrollPosition >= 400 && scrollPosition < 900) {
        setBgColor('#F6867A'); // First transition color
      } else {
        setBgColor('#FFFFFF'); // Another color after more scrolling
      }

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
        <Header/>
        <main       className="background-transition"
      style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease-in-out' }}>
          <HeroSliderTwo/>
          <HomeAboutFour/>
          <HistorySectionFour/>
          <PortFolioSectionFour/>
          {/* <TestimonialSliderTwo/> */}
          {/* <VideoSectionFour/> */}
          {/* <Vediosectionthree/> */}
          <TeamSectionThere/>
          <BlogSectionFour/>
          {/* <CertificateSlider/> */}
          <ContactSection/>
        </main>
        <FooterOne/>
        </>
    );
};

export default index;