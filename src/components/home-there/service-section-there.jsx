import useServicesFatchingData from "@hooks/use-services-fatching";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "@assets/img/movie/19.png";
const ServiceSectionThere = () => {
  const services1 = useServicesFatchingData();
  const services = [
    {
      name: "Design",
      description:
        "We are interested in telling stories through visuals that we extrapolate from the symbolic universe of each brand. We draw fully on the visual/cultural aspects that qualify the client and catalyse as many narrative speeches as possible in the design idea, respecting the soul of the brand.",
    },
    {
      name: "Digital",
      description:
        "We analyse, coordinate and develop digital projects and experiences. Each solution relies on a dynamic approach between experimentation, technology and creativity in which the right emotional drive allows the achievement of the goal.",
    },
    {
      name: "Web & Mobile",
      description:
        "Through an extremely functional design, attentive to usability and ease of browsing we make every user of our projects live a unique and innovative experience. We support our customers in everything that follows the implementation, promotion and management of relationships with the end user.",
    },
  ];

  return (
    <section className="fm-services-area section-spacing" style={{background:"#FFCD03"}}>
      <div className="container">
        <div
          className="row justify-content-center section-title-spacing wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">WHAT WE DO</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Our Best Expertise
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" fade_animation">
          <div className="row g-5">
            {services.map((item) => (
              <div
                className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-services-item fade__anim-item">
                  <div className="fm-services-icon">
                    <Image
                      src={icon}
                      width={500}
                      height={500}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                  <div className="fm-services-content">
                    <h4 className="fm-services-title">
                      <Link href='#'>
                        {item.name}
                      </Link>
                    </h4>
                    <p className="fm-services-text">{item.description}</p>
                    <div className="fm-btn services-btn">
                      <Link
                        href='#'
                        className="fm-view-more"
                      >
                        view more
                        {/* {item.serviceBtn} */}
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThere;
