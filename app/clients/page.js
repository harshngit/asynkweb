"use client";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
        CLIENTS PAGE START
      ===============================*/}
      <section className="tf__services_page tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="section_heading">
                <h5>OUR CLIENTS</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  Trusted by Leading Brands
                </h2>
              </div>
              <div className="about_text_2">
                <p>
                  We are proud to work with innovative companies and forward-thinking businesses across various industries. Our clients trust us to deliver exceptional digital solutions that drive growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        CLIENTS LOGO MARQUEE
      ===============================*/}
      <section className="tf__brand pt_100 xs_pt_60 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center mb-5">
                <h5>OUR CLIENTS</h5>
                <h2 className="banner_title">Trusted by Leading Brands</h2>
              </div>
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li>
                    <a href="#">
                      <img src="images/brand_1.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_5.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_2.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_3.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_6.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_1.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/brand_4.jpg" alt="client" className="img-fluid w-100" />
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        CLIENTS PAGE END
      ===============================*/}
    </FxotaryLayout>
  );
};

export default page;
