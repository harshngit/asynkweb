"use client";
import Counter from "@/components/Counter";
import TestimonialSlider from "@/components/TestimonialSlider";
import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";

const page = () => {
  const workItems = [
    { title: "Dental CRM", img: "images/futured_work_img_1.jpg", category: "CRM" },
    { title: "Gym Management System", img: "images/futured_work_img_2.jpg", category: "Management" },
    { title: "Society Management System", img: "images/futured_work_img_3.jpg", category: "Management" },
    { title: "Custom Software Development", img: "images/futured_work_img_4.jpg", category: "Software" },
  ];

  return (
    <FxotaryLayout>
      {/*===============================
        HEADER SECTION - TITLE, DESCRIPTION + FORM
      ===============================*/}
      <section className="tf__contact_page mt_190 xs_mt_150 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title">
                  Website Development Services
                </h2>
                <div className="mt_30">
                  <p>
                    Transform your digital presence with our cutting-edge website development services. We create stunning, responsive websites that deliver exceptional user experiences and drive business growth. Our expert team uses the latest technologies to build websites that are fast, secure, and optimized for all devices.
                  </p>
                  <p className="mt-3">
                    From custom web applications to e-commerce platforms, we provide end-to-end website development solutions tailored to your business needs. Whether you need a simple landing page or a complex enterprise solution, we've got you covered.
                  </p>
                  <ul className="mt-4" style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    <li>Custom Web Development</li>
                    <li>Responsive Design</li>
                    <li>E-commerce Solutions</li>
                    <li>Content Management Systems</li>
                    <li>Web Performance Optimization</li>
                    <li>API Integration & Third-party Services</li>
                  </ul>
                  <div className="mt-4">
                    <a href="#" className="common_btn" style={{ display: "inline-block", marginBottom: "20px" }}>
                      <i className="fa-solid fa-download" style={{ marginRight: "8px" }}></i>
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <form className="tf__contact_form">
                <h3 className="mb-4">Get a Free Quote</h3>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Name:</label>
                  <input type="text" placeholder="e.g. John Doe" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Email:</label>
                  <input type="email" placeholder="e.g. youremail@gmail.com" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Phone Number:</label>
                  <input type="text" placeholder="e.g. +1 234 567 8900" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Type:</label>
                  <select>
                    <option value="">Select a service type</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="landing-page">Landing Page Development</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="webflow">Webflow Development</option>
                  </select>
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Tell us what you want help with:</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you want help with..."
                    defaultValue={""}
                  />
                </div>
                <button className="circle_btn circle_btn_2 learn_more_2" type="submit" style={{ padding: "12px 40px", height: "auto", width: "auto", marginTop: "10px" }}>
                  <i className="fx-icon-long-next-arrow" />
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        KEY METRICS SECTION
      ===============================*/}
      <section className="counter pt_120 xs_pt_70 pb_140 xs_pb_90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading mb-5">
                <h5>KEY METRICS</h5>
                <h2>Our Achievements in Numbers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right">
              <div className="counter_item counter_item_icon">
                <h2 className="count">
                  <Counter end={500} />+
                </h2>
                <p>Websites Developed</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".5">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={98} />%
                </h2>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".75">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={50} />+
                </h2>
                <p>Expert Developers</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay={1}>
              <div className="counter_item counter_item_icon">
                <h2 className="count">
                  <Counter end={15} />+
                </h2>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        OUR WORK CAROUSEL (6 ITEMS)
      ===============================*/}
      <section className="tf__featured_work pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="section_heading">
                <h5>OUR WORK</h5>
                <h2 className="banner_title" data-text-animation="" data-split="char">
                  Featured Projects
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <p>
                Explore some of our recent website development projects that showcase our expertise and creativity in delivering exceptional digital experiences.
              </p>
            </div>
          </div>
          <div className="row mt_60">
            <div className="col-12">
              {/* Image dimensions: 400px height, 16:9 aspect ratio (landscape/rectangular format) */}
              {/* Spacing: 40px padding on each side between carousel items */}
              <Slider {...sliderProps.portfolio} className="featured_work_slider">
                {workItems.map((item, index) => (
                  <div key={index} style={{ padding: "0 40px" }}>
                    <div className="tf__featured_work_item">
                      <Link href="portfolio_details" className="tf__featured_work_item_img cursor-arrow" style={{ height: "400px", aspectRatio: "16/9" }}>
                        <div data-animation="img-blur">
                          {/* Image size: Height 400px, Aspect Ratio 16:9 (Landscape/Rectangle) */}
                          <img
                            src={item.img}
                            alt={item.title}
                            className="img-fluid w-100"
                            style={{ objectFit: "cover", height: "100%" }}
                          />
                        </div>
                      </Link>
                      <Link href="portfolio_details">
                        <h3 data-text-animation="" data-split="word">{item.title}</h3>
                      </Link>
                      <p data-text-animation="slide-from-right" data-split="char">
                        {item.category} / Website Development
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        SERVICES SECTION (UI/UX, Landing Page, Shopify, WordPress, Webflow)
      ===============================*/}
      <section className="what_we_do pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title" data-text-animation="" data-split="char">
                  Specialized Services
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <p>
                We offer a comprehensive range of website development services to meet all your digital needs.
              </p>
            </div>
          </div>
          <div className="row mt_60">
            <div className="col-xl-12">
              <ul className="what_we_do_list">
                <li data-animation="" className="image-view">
                  <div className="icon">
                    <i className="fa-solid fa-palette" style={{ fontSize: "50px", color: "var(--colorPrimary)" }}></i>
                  </div>
                  <div className="text">
                    <h3>UI/UX Design</h3>
                    <p>
                      Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement. We focus on user-centered design principles to deliver exceptional digital experiences.
                    </p>
                  </div>
                  <a className="circle_btn" href="/website-development">
                    details
                  </a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon">
                    <img src="icons/web-programming.svg" alt="Landing Page" className="img-fluid w-100 svg" />
                  </div>
                  <div className="text">
                    <h3>Landing Page Development</h3>
                    <p>
                      High-converting landing pages designed to capture leads and drive sales. Our landing pages are optimized for conversions with A/B testing and performance tracking.
                    </p>
                  </div>
                  <a className="circle_btn" href="/website-development">
                    details
                  </a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon">
                    <img src="icons/web-programming.svg" alt="Shopify" className="img-fluid w-100 svg" />
                  </div>
                  <div className="text">
                    <h3>Shopify Development</h3>
                    <p>
                      Custom Shopify stores that are fully optimized for e-commerce success. We create scalable online stores with custom themes, apps, and integrations to boost your sales.
                    </p>
                  </div>
                  <a className="circle_btn" href="/website-development">
                    details
                  </a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon">
                    <img src="icons/web-programming.svg" alt="WordPress" className="img-fluid w-100 svg" />
                  </div>
                  <div className="text">
                    <h3>WordPress Development</h3>
                    <p>
                      Custom WordPress websites and themes tailored to your brand. We build fast, secure, and SEO-friendly WordPress sites with custom plugins and functionality.
                    </p>
                  </div>
                  <a className="circle_btn" href="/website-development">
                    details
                  </a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon">
                    <img src="icons/web-programming.svg" alt="Webflow" className="img-fluid w-100 svg" />
                  </div>
                  <div className="text">
                    <h3>Webflow Development</h3>
                    <p>
                      Beautiful, responsive websites built on Webflow's powerful platform. We leverage Webflow's design capabilities to create visually stunning websites without compromising on functionality.
                    </p>
                  </div>
                  <a className="circle_btn" href="/website-development">
                    details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        ABOUT ASYNK SECTION
      ===============================*/}
      <section className="about_us pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7">
              <div className="about_text">
                <div className="section_heading">
                  <h5 data-text-animation="">ABOUT ASYNK</h5>
                  <h2 data-text-animation="" data-split="word" data-duration={1}>
                    Leading Tech Agency Transforming Businesses
                  </h2>
                </div>
                <p className="mt-4">
                  Asynk is a premier technology agency specializing in website development, digital solutions, and innovative tech services. With over 15 years of experience, we've helped hundreds of businesses establish a strong digital presence.
                </p>
                <p className="mt-3">
                  Our team of expert developers, designers, and strategists work together to deliver exceptional results that drive business growth and success.
                </p>
                <Link className="circle_btn" href="/about_us">
                  Learn More <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="about_img_1">
                <div className="img">
                  <div data-animation="img-blur">
                    <img
                      src="images/about_img_1.jpg"
                      alt="About Asynk"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <p>
                  We combine cutting-edge technology with creative design to build websites that not only look great but also perform exceptionally well, delivering measurable results for our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="about_img_2">
                <div data-animation="img-blur">
                  <img
                    src="images/about_img_2.jpg"
                    alt="Asynk Team"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===============================
        TESTIMONIAL SECTION
      ===============================*/}
      <section className="testimonial pt_120">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>

      {/*===============================
        CLIENTS SECTION
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
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      <Question />
    </FxotaryLayout>
  );
};
export default page;
