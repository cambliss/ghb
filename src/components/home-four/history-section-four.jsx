import Image from "next/image";
import Link from "next/link";
import React,{useState,useEffect} from "react";
import historyImgOne from "@assets/img/logo/aboutuscambliss1.png";
import historyImgTwo from "@assets/img/history/img-2.jpg";
import historyImgThere from "@assets/img/history/img-3.jpg";

const HistorySectionFour = () => {
  const historyData = [
    {
      id: 1,
      title: "Discovery",
      iconOne: "far fa-mug-hot",
      iconTwo: "far fa-check",
      description:
        "We start our projects by understanding the scope and requirements. This is accomplished by working closely with you to make sure we are all on the same page.",
    },
    {
      id: 2,
      title: "Plan",
      iconOne: "fa-solid fa-stars",
      iconTwo: "far fa-check",
      description:
        "Following the initial kick-off meeting, we will outline your project, create milestones, and agree on project priorities. Now we have a strategic plan in place that aligns with your initial vision and makes your goals achievable.",
    },
    {
      id: 3,
      title: "Execute",
      iconOne: "far fa-mug-hot",
      iconTwo: "far fa-check",
      description:
        "The final design takes shape and, at this stage, the idea comes to life representing the visual concepts. Our creative development team reviews and revises the materials until it aligns with your goals.",
    },
    {
      id: 4,
      title: "Deliver",
      iconOne: "far fa-mug-hot",
      iconTwo: "far fa-check",
      description:
        "Review and testing takes place, which ensures the quality of your project. We value your reputation and want to make sure it is correct. After this, we present your finished custom project and upon approval, your new product/campaign will be launched and promoted.",
    },
  ];










  const [color, setColor] = useState('#000'); // Default text color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the color based on the scroll position
      if (scrollPosition < 400) {
        setColor('#ffffff'); // Black at the top
      } else if (scrollPosition >= 400 && scrollPosition < 900) {
        setColor('#ffffff'); // Coral for mid-scroll
      } else {
        setColor('#000000'); // Blue when further down
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="history-area section-spacing-bottom">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-12 col-lg-12 col-md-10">
            <div className="single-history">
              <div
                className="section-title sec-sub-style mb-60 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <span className="section-subtitle" style={{ color: color }}>Why Work With US</span>
                <h2 className="section-main-title about-sec-title-2  title-anim" style={{ color: color }}>
                  Where imagination and Strategy Converge
                </h2>
              </div>

              <ul className="history-link wow fadeInUp" data-wow-delay="0.4s">
                {historyData.map((item) => (
                  <li key={item.id}>
                    <div className="history-2-icon" style={{ color: color }}>
                      <i className={item.iconOne} style={{ color: color }}></i>
                      <div className="history-tag">
                        <i className={item.iconTwo}></i>
                      </div>
                    </div>
                    <div className="history-content" >
                      <h3 style={{ color: color }}>{item.title}</h3>
                      <p style={{ color: color }}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="history-btn fade_bottom_2 wow fadeInUp" data-wow-delay="0.5s">
                <Link href="/blog-details" className="fill-btn">
                  view more
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-10 d-none">
            <div
              className="fm-history-thumb-wrapper wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="history-thumb-1">
                <Image
                  src={historyImgOne}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              {/* <div className="history-thumb-2">
                <Image
                  src={historyImgTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="history-thumb-3">
                <Image
                  src={historyImgThere}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySectionFour;
