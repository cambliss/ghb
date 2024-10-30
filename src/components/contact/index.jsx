import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React, { useEffect } from "react";
import ContactArea from "./contact-area";
import ContactMap from "./contact-map";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Contact Us" subTitle="Contact Us" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div
            class="row align-items-end justify-content-center mt-8 md-mt-0"
            style={{ marginTop: "8%" }}
          >
            <div class="col-12 col-xxl-4 col-xl-4 col-lg-5 col-md-12 position-relative page-title-large md-mb-30px appear anime-child anime-complete">
              <h1
                class="text-dark-gray alt-font fw-400 ls-minus-1px mb-0"
                id="contacth1"
              >
                <span class="text-base-color" style={{ color: "#FFCD03" }}>
                  //
                </span>
                Contact
              </h1>
            </div>
            <div
              class="col-12 col-xxl-7 col-xl-7 col-lg-7 offset-xl-1 last-paragraph-no-margin"
              id="contactsection2"
            >
              <h2
                class="fs-55 lh-65 text-dark-gray fw-600 ls-minus-2px mb-0 appear words lines splitting anime-child anime-complete"
                id="contacth2"
              >
                <span class="d-inline" style={{ willChange: "inherit" }}>
                  We are here to here answer
                </span>{" "}
                <span class="d-inline" style={{ willChange: "inherit" }}>
                  any question you may
                </span>{" "}
                <span class="d-inline" style={{ willChange: "inherit" }}>
                  have.Let us help you get
                </span>{" "}
                <span class="d-inline" style={{ willChange: "inherit" }}>
                  your project started.
                </span>
              </h2>
            </div>
          </div>
        </div>

        <section class="pt-0" style={{ marginTop: "5%" }}>
          <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center appear anime-child anime-complete">
              <div
                class="col md-mb-30px text-center text-sm-start"
                style={{ marginBottom: "30px" }}
              >
                <span
                  class="fs-15 text-uppercase fw-500 d-block"
                  style={{ marginBottom: "10px" }}
                >
                  Have questions?
                </span>

                <a
                  href="mailto:help@crafto.com"
                  class="fs-22 ls-minus-05px  fw-500  btn-link-gradient expand text-transform-none"
                  style={{
                    fontSize: "2rem",
                    color: "#000000",
                  }}
                >
                  help@ghb.digital<span class="bg-dark-gray"></span>
                </a>
              </div>
              <div
                class="col md-mb-30px text-center text-sm-start"
                style={{ marginBottom: "30px" }}
              >
                <span
                  class="fs-15 text-uppercase fw-500 d-block"
                  style={{ marginBottom: "10px" }}
                >
                  Join our team?
                </span>{" "}
                <a
                  href="mailto:careers@crafto.com"
                  class="fs-22 ls-minus-05px fw-500  btn-link-gradient expand text-transform-none"
                  style={{
                    fontSize: "2rem",
                    color: "#000000",
                  }}
                >
                  careers@ghb.digital<span class="bg-dark-gray"></span>
                </a>
              </div>
              <div
                class="col text-center text-sm-start"
                style={{ marginBottom: "30px" }}
              >
                <span
                  class="fs-15 text-uppercase fw-500 d-block"
                  style={{ marginBottom: "10px" }}
                >
                  Business inquiries?
                </span>{" "}
                <a
                  href="mailto:hello@crafto.com"
                  class="fs-22 ls-minus-05px  fw-500  btn-link-gradient expand text-transform-none"
                  style={{
                    fontSize: "2rem",
                    color: "#000000",
                  }}
                >
                  hello@ghb.digital<span class="bg-dark-gray"></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="position-relative py-0">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <div
                  class="one-half-screen h-600px sm-small-screen"
                  data-scroll
                  data-scroll-speed="1"
                  style={{
                    backgroundImage:
                      'url("https://craftohtml.themezaa.com/images/demo-design-agency-contact-01.jpg")',
                    backgroundPosition: "50% 145.625px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "600px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <ContactArea />
        <ContactMap />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
