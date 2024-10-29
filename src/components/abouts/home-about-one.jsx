import Image from "next/image";
import React from "react";
import aboutImage from "@assets/img/about/director-about.png";
import Link from "next/link";
import aboutusimage from "@assets/img/logo/aboutus.jpeg";
import aboutusimage1 from "@assets/img/logo/aboutus1.png";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import about2 from '@assets/img/logo/homeabout2.jpg'
import { Navigation } from "swiper";
const AboutSection = () => {
  return (
    <div className="fm-about-area bg-common-black section-spacing fix">
      <div className="container">
        <div className="row align-items-center g-5 gy-50">
          <div
            className="col-xl-6 col-lg-6 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div className="fm-director-about-img">
              <Image
                src={about2}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
              {/* <div className="fm-director-years">
                        <span className="fm-director-years-number">30</span>
                        <span className="fm-director-years-content">
                           <span className="fm-director-plus">+</span>
                           <span className="fm-director-years-text">Years <br /> Experience</span>
                        </span>
                     </div> */}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow fadeInRight"
            data-wow-delay="0.3s"
          >
            <div className="fm-about-content-section">
              <span className="section-subtitle title-anim">Our Story</span>
              <h2 className="section-main-title text-white mb-25 title-anim">
              Empowering Brands <br />with Innovative Digital Solutions 
              </h2>



              <div className="story-slider">
              <div style={{display:"flex",justifyContent:"space-between"}}>
        <div className="d-none d-md-block">
            <div className="fm-slider-main-slide-pagination"></div>
          </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                  <div className="fm-landing-trending-slider-navigation fade_bottom_3 text-sm-end" id="fm-landing-trending-slider-navigation ">
                    <span className="fm-landing-premium-prev1" id="fm-landing-premium-prev1">
                      <i className="fa-light fa-angle-left"></i>
                    </span>
                    <span className="fm-landing-premium-next1 "  id="fm-landing-premium-next1">
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                   
                  </div>
                </div></div>
                <br />
      <Swiper
        modules={[Pagination, Autoplay,Navigation]}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      //   pagination={{
      //     clickable: true,
      //     el: ".fm-slider-main-slide-pagination",
      //   }}
        navigation={{
         nextEl: ".fm-landing-premium-next1",
         prevEl: ".fm-landing-premium-prev1",
       }}
      >
      

        <SwiperSlide>
          <p className="mb-20">
            {`At our Global Honey Bee`} Everyones talking about it! Its a
            new era in marketing! It is ,<strong>The Experience Era!! </strong>Its a time
            when people are looking for a distinguished experience via
            engaging with brands and with each other in entirely new ways.
            Today, people are taking control from the brands and
            organizations that used to do most of the talking and shaping
            their own stories.
          </p>     <p>
            Our Story at Global Honey Bee also began while designing
            marketing experiences like these. We understand this new era
            because designing an immortal experience that matters to users
            is what we have always done. For brands to win today, requires
            storytelling that is relevant, personal and genuine. It means
            understanding the new power that trusted advocates wield. And,
            more than anything, winning demands content that is provocative,
            original and irresistible.
          </p>
        </SwiperSlide>

        <SwiperSlide>
     <p className="mb-20">We are a creative studio of writers, designers, builders, strategists, conversation-starters and storytellers. We are passionate about our clients and through our astute research &amp; experience and dedicated people, we design and create experience for users associated with their businesses. </p>
        <p  className="mb-20">With us, it is all about you. Simple as that! Your customers, employees, partners, and vendors expect to be engaged as individuals—based on their terms, their needs, and their interests. As a business, the only response is to change your approach to suit them. Our job is to help you do that. We use digital technology to help businesses engage each of their audiences with data-driven messages through experiences that span across channels. Because our services are designed to cover the spectrum—from strategy to enablement to operations—we are able to help you create the experiences, relationships, insights, and delivery that you need to be effective.</p>
       <p className="lets">Let us create together</p>
        </SwiperSlide>
        
        {/* Add more SwiperSlide components for additional paragraphs if needed */}
      </Swiper>
    </div>
              {/* <p className="mb-20">
                {`At our Global Honey Bee`} Everyone's talking about it! It's a
                new era in marketing! It is "The Experience Era"!! It's a time
                when people are looking for a distinguished experience via
                engaging with brands and with each other in entirely new ways.
                Today, people are taking control from the brands and
                organizations that used to do most of the talking and shaping
                their own stories.
              </p>

              <p>
                Our Story at Global Honey Bee also began while designing
                marketing experiences like these. We understand this new era
                because designing an immortal experience that matters to users
                is what we’ve always done. For brands to win today, requires
                storytelling that’s relevant, personal and genuine. It means
                understanding the new power that trusted advocates wield. And,
                more than anything, winning demands content that’s provocative,
                original and irresistible.
              </p> */}
              {/* <div className="fm-director-about-name mt-55">
                        <Link href="/team-details" className="director-about-nam">David Anderson</Link>
                     </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
