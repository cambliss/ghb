import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnBg from "@assets/img/bg/btn-bg.png";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import FeaturedScrollArea from "../scroll-area-slider/featured-scroll-area";
//swipper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import axios from "axios";

import img from '@assets/img/movie/18.jpg'


import img1 from '@assets/img/movie/18.jpg'

import img2 from '@assets/img/movie/sliders/2.jpg'
import img3 from '@assets/img/movie/sliders/3.jpg'
import img4 from '@assets/img/movie/sliders/4.jpg'
import img5 from '@assets/img/movie/sliders/5.png'
import img6 from '@assets/img/movie/sliders/6.png'

import img7 from '@assets/img/movie/sliders/7.jpg'
import img8 from '@assets/img/movie/sliders/8.jpg'
import img9 from '@assets/img/movie/sliders/9.jpg'
import img10 from '@assets/img/movie/sliders/10.jpg'
import img11 from '@assets/img/movie/sliders/11.jpg'
import img12 from '@assets/img/movie/sliders/12.jpg'
import img13 from '@assets/img/movie/sliders/13.jpg'
import img14 from '@assets/img/movie/sliders/14.jpg'
import img15 from '@assets/img/movie/sliders/15.jpg'

const MovieSliderOne = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  useEffect(() => {
    axios
      // .get(`${process.env.BASE_URL}movie/all-movie`)
      .get(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`)


      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
        
      })
      .catch((e) => console.log(e));
  }, []);
  const movies1 = [
    {
      name: "Banaaras Photoshoot",
      img: img1,
      category: "Product Photoshoot",
      description: "Steeped in ancient Indian tradition Banaaras brings to you flavours of our luxurious past to the 2Ist century."
    },
    {
      name: "HopeBerry",
      img: img2,
      category: "Healthcare",
      description: "Logo Design, Brand Identity, Brand Manual, Corporate Identity, Stationary Design."
    },
    {
      name: "Tarshs Systems",
      img: img3,
      category: "Technology, Analytics",
      description: "Tarsha Systems is a technology company specialised in Big Data and advanced Analytics."
    },
    {
      name: "Awww",
      img: img4,
      category: "Maternity, E-commerce, Fashion",
      description: "Social Media Marketing, Facebook Marketing, Instagram Marketing, Lead Generation, Conversion Campaign"
    },
    {
      name: "Farmina India",
      img: img5,
      category: "Pet Foods",
      description: "Social Media Marketing, Search Engine Marketing, PPC, Google Ads, Lead Generation."
    },
    {
      name: "Dariba Jewellers Association",
      img: img6,
      category: "Jewellery",
      description: "Dariba Kalan, the jewellery bazar in Delhi, is a Mughal era bazar."
    },
    {
      name: "RLRC India",
      img: img7,
      category: "Corporate",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "Globalx",
      img: img8,
      category: "Corporate",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "FinsQ ",
      img: img9,
      category: "Corporate",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "Awww",
      img: img10,
      category: "E-commerce",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "Ensured Future/Leads Insurance Brokers",
      img: img11,
      category: "E-commerce",
      description: "Website Strategy, UI, UX, Website Design, Website Development, Backend"
    },
    {
      name: "Wear Marvel",
      img: img12,
      category: "E-commerce",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "SPARC",
      img: img13,
      category: "NGO",
      description: "Website & Mobile Strategy, UI, UX, Website Design, Website Development, Mobile App Design, Mobile App Development"
    },
    {
      name: "Hridai",
      img: img14,
      category: "Not for Profit",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    },
    {
      name: "Uttaroday",
      img: img15,
      category: "NGO",
      description: "Website Strategy, UI, UX, Website Design, Website Development"
    }
  ];
  
  return (
    <>
      <section className="featured-area section-spacing featured-full-width p-relative bg-common-black" style={{paddingBottom:"0"}}>
        <div className="container">
          <div
            className="row g-5 section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-8">
              <div className="fm-featured-wrapper">
                <div className="featured-sec-wrapper">
                  <div className="section-title">
                    <span className="section-subtitle featured-sub-title title-anim">
                     Projects
                    </span>
                    <h2 className="section-main-title text-white title-anim">
                    Highlighting Our Marketing Achievements
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-featured-wrapper d-flex justify-content-lg-end">
                <div className="featured-btn-circle-wrap btn_wrapper">
                  <Link
                    href="/movie-details"
                    className="featured-rotate-btn btn__item-move"
                  >
                    <span>
                      <i className="flaticon-right-arrow-1"></i>
                    </span>
                    <Image
                      className="image-text"
                      src={BtnBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container section-spacing-bottom">
          <div
            className="featured-wrapper featured-slider-wrapper wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              loop={true}
              centeredSlides={false}
              observeParents={true}
              observer={true}
              autoplay={true}
              pagination={{
                el: ".product-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".featured-slider-button-next",
                prevEl: ".featured-slider-button-prev",
              }}
              className="featured-active"
              // Responsive breakpoints
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              {movies.length &&
                movies.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div>
                      <div className="fm-single-featured">
                        <div className="fm-featured-thumb">
                          <Link href="/movie">
                            <Image
                              src={img}
                              width={500}
                              height={500}
                              style={{ width: "auto", height: "100%" }}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <div className="fm-featured-content">
                          <div className="fm-featured-content-inner">
                            <Link href={`/movie-details/${item._id}`}>
                              <h4 className="fm-featured-title">
                                {item.Title}
                              </h4>
                            </Link>
                            <span className="fm-featured-meta">
                              {item.Year}
                            </span>
                          </div>
                          <div className="fm-video-play">
                            <button
                              className="play-btn popup-video"
                              onClick={() => {
                                openVideoModal(item.videoUrl);
                              }}
                            >
                              <i className="fas fa-play"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="featured-slider-btn">
              <div className="featured-slider-button-prev square-btn">
                <i className="fal fa-angle-left"></i>
              </div>
              <div className="featured-slider-button-next square-btn">
                <i className="fal fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div> */}

           <div className="container-fluid section-spacing-bottom">
          <div
            className="featured-wrapper featured-slider-wrapper wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="fm-movie-slider-active">
            <div>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                navigation={{
                  nextEl: ".fm-movie-next",
                  prevEl: ".fm-movie-prev",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  el: ".fm-movie-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.6,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 1.8,
                  },
                }}
              >
                {movies?.length ?
                  <>
                    {
                      movies1.map((item) => (



                        <SwiperSlide key={item._id}>
                      
                          
                          <div
                            className="fm-movie-slider-single"
                           style={{ backgroundImage: `url(${item.img.src})` }}
                          >
             
                            <div className="fm-movie-slider-content">
                              <span className="fm-movie-tag">    {item.category}</span>
                              <h4 className="fm-movie-slider-title">
                                {item.name}
                              </h4>
                              <p className="fm-movie-slider-description" style={{color:"white"}}>{item.description}</p>
                              {/* <span className="fm-movie-duration">
                                {item.category}
                              </span> */}
                            </div>
                            {/* <div className="fm-movie-video">
                              <button
                                className="popup-video"
                                onClick={() => {
                                  openVideoModal(item.videoUrl);
                                }}
                              >
                                <span className="movie-video-button">
                                  <i className="fa-thin fa-play"></i>
                                  <svg className="eltdf-svg-circle">
                                    <circle cx="50%" cy="50%" r="45%"></circle>
                                  </svg>
                                </span>
                                WATCH NOW
                              </button>
                            </div> */}
                          </div>
                        </SwiperSlide>
                      ))
                    }

                  </>
                  :
                  <>

                  </>
                }
              </Swiper>
            </div>
            <div className="fm-movie-navigation">
              <span className="fm-movie-next">
                <i className="fa-thin fa-angle-right"></i>
              </span>
              <span className="fm-movie-prev">
                <i className="fa-thin fa-angle-left"></i>
              </span>
            </div>
          </div>
          <div className="fm-movie-pagination swiper-pagination mt-40"></div>
          </div>
        </div>
        {/* <FeaturedScrollArea /> */}
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MovieSliderOne;
