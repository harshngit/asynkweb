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
    { title: "Dental CRM System", img: "images/futured_work_img_1.jpg", category: "CRM" },
    { title: "Patient Management", img: "images/futured_work_img_2.jpg", category: "Management" },
    { title: "Appointment Scheduling", img: "images/futured_work_img_3.jpg", category: "Scheduling" },
  ];

  return (
    <FxotaryLayout>
      <section className="tf__contact_page mt_190 xs_mt_150 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="section_heading">
                <h5>OUR SOLUTIONS</h5>
                <h2 className="banner_title">
                  Dental CRM Solution
                </h2>
                <div className="mt_30">
                  <p>
                    Streamline your dental practice operations with our comprehensive Dental CRM system. Manage patient records, appointments, treatments, and billing all in one integrated platform designed specifically for dental clinics.
                  </p>
                  <p className="mt-3">
                    Our Dental CRM solution helps dental practices improve patient care, increase efficiency, and grow their business. From patient scheduling to treatment history and billing, we provide all the tools you need to run a successful dental practice.
                  </p>
                  <ul className="mt-4" style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    <li>Patient Records Management</li>
                    <li>Appointment Scheduling System</li>
                    <li>Treatment History Tracking</li>
                    <li>Billing & Invoicing</li>
                    <li>Automated Reminders</li>
                    <li>Analytics & Reporting</li>
                  </ul>
                  <div className="mt-4">
                    <a href="#" className="common_btn" style={{ display: "inline-block", marginBottom: "20px" }}>
                      <i className="fa-solid fa-download" style={{ marginRight: "8px" }}></i>
                      Download Brochure
                    </a>
                  </div>
                  <div className="mt-3">
                    <Link href="/services" className="common_btn" style={{ display: "inline-block", padding: "12px 30px", borderRadius: "4px" }}>
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <form className="tf__contact_form">
                <h3 className="mb-4">Get a Free Quote</h3>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Full Name:</label>
                  <input type="text" placeholder="e.g. John Doe" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Email:</label>
                  <input type="email" placeholder="e.g. youremail@gmail.com" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Phone:</label>
                  <input type="text" placeholder="e.g. +1 234 567 8900" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Practice Name:</label>
                  <input type="text" placeholder="e.g. Smile Dental Clinic" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Message:</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
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
                  <Counter end={60} />+
                </h2>
                <p>Websites Created</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".5">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={100} />+
                </h2>
                <p>Clients Served</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".75">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={80} />+
                </h2>
                <p>In-house Automations</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay={1}>
              <div className="counter_item counter_item_icon">
                <h2 className="count">
                  <Counter end={10} />+
                </h2>
                <p>Proprietary Softwares</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Explore our dental CRM implementations that showcase our expertise in practice management solutions.
              </p>
            </div>
          </div>
          <div className="row mt_60">
            <div className="col-12">
              <Slider {...sliderProps.portfolio} className="featured_work_slider">
                {workItems.map((item, index) => (
                  <div key={index} style={{ padding: "0 40px" }}>
                    <div className="tf__featured_work_item">
                      <Link href="portfolio_details" className="tf__featured_work_item_img cursor-arrow" style={{ height: "400px", aspectRatio: "16/9" }}>
                        <div data-animation="img-blur">
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
                        {item.category} / Dental CRM
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

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
                  Asynk is a premier technology agency specializing in custom software development, CRM solutions, and innovative tech services. We deliver solutions that transform businesses.
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

      <section className="testimonial pt_120">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>

      <Question />
    </FxotaryLayout>
  );
};

export default page;
