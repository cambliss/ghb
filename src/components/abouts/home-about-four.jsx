import React from "react";
import AboutImgOne from "@assets/img/logo/one.png";
import AboutImgTwo from "@assets/img/logo/two/3.png";
import AboutImgThere from "@assets/img/logo/three.png";
import Image from "next/image";
import Link from "next/link";
import a1 from '@assets/img/about-us/1.jpg'
import a2 from '@assets/img/about-us/2.jpg'
import a3 from '@assets/img/about-us/3.jpg'

const HomeAboutFour = () => {
  return (
    <div className="about-area section-spacing-top fix-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="fm-about-thumb-wrapper-3 wow fmSlideInLeft"
              data-wow-delay="0.4s"
            >
              <div className="fm-about-thumb-3">
                <Image
                  src={a1}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={a3}
                  id="second-about"
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={a2}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-2-wrapper wow fmSlideInRight"
              data-wow-delay="0.4s"
            >
              <div className="section-title sec-sub-style mb-30">
                <span className="section-subtitle">ABOUT US</span>
                <h2 className="section-main-title about-sec-title-2 title-anim ">
                  Digitals Dreamers Since
                  <br />
                  <span>2016</span>
                </h2>
              </div>
              <div className="fm-about-content-2">
                <p>
                  We are a full-service digital marketing agency that views each
                  of our clients as true business partners. We are an
                  award-winning team for bright ideas — a small team of
                  designers, developers, social media marketers and thinkers who
                  are excited to help you bring your idea to life.
                </p>
                <p>
                  We make <span class="before-underline">things easy</span>,
                  even when they’re complex.
                  <span class="before-underline">Creative work</span> can be as
                  bumpy as it is rewarding, so we spent years crafting a lean,
                  no-nonsense approach to our work and developing the right
                  tools to make solving problems an enjoyable experience.
                </p>
                {/* <Link href="/contact" className="fill-btn fade_bottom">
                  Hire Me
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutFour;
