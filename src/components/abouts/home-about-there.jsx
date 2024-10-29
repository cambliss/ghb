import React from "react";
import AboutImg from "@assets/img/bg/about-bg.jpg";
import Image from "next/image";
import h1  from '@assets/img/brand/h1.jpg'
import h2 from '@assets/img/vijay/hero-2.jpg'
const HomeAboutThere = () => {
  return (
    <section className="about-area section-spacing fix">
      <div className="container">
        <div className="row g-5 section-title-spacing">
          <div
            className="col-xl-6 col-lg-4 wow fmSlideInLeft"
            data-wow-delay="0.3s"
          >
            <div className="about-sub">
              <span className="section-subtitle title-anim mb-0">
                ABOUT Global Honey Bee
              </span>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-8 wow fmSlideInRight"
            data-wow-delay="0.3s"
          >
            <div className="section-title">
              <h2 className="section-main-title about-main-title title-anim">
                On-Demand Digital <br />
                Marketing Solutions
              </h2>
              <div className="section-text about-text">
                {/* <p>Faime Production Is A Full—Service Production House Based Out Indonesia And Singapore That
                           Hosts A Thriving Roster Of Directors Working Across A Range Of Artistic Disciplines.</p> */}
                <p>
                  We're a team of dedicated multidisciplinary young people who
                  truly madly deeply execute and deliver high quality Digital
                  products with knowledge and ambition . The Bigger the
                  challenge, the better we thrive under pressure
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-thumb-wrapper wow fadeInUp" data-wow-delay="0.5s">
          <div className="about-exp">
            <h4 className="about-exp-num">10</h4>
            <p className="about-exp-text small text-white">
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="about-thumb">
            <Image
              src={h2}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
              data-speed="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutThere;
