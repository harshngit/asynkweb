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
    { title: "Brand Campaign", img: "images/futured_work_img_1.jpg", category: "Branding" },
    { title: "Social Media Strategy", img: "images/futured_work_img_2.jpg", category: "Social Media" },
    { title: "Content Marketing", img: "images/futured_work_img_3.jpg", category: "Content" },
    { title: "SEO Optimization", img: "images/futured_work_img_4.jpg", category: "SEO" },
    { title: "Email Campaign", img: "images/futured_work_img_5.jpg", category: "Email" },
    { title: "PPC Campaign", img: "images/futured_work_img_6.jpg", category: "Advertising" },
  ];

  return (
    <FxotaryLayout>
      <section className="tf__contact_page mt_190 xs_mt_150 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title">360deg Digital Marketing Services</h2>
                <div className="mt_30">
                  <p>
                    Comprehensive 360-degree marketing solutions that cover every aspect of your digital presence. We create integrated marketing strategies that connect all touchpoints with your audience, ensuring consistent messaging and maximum impact across all channels.
                  </p>
                  <p className="mt-3">
                    Our holistic approach combines traditional and digital marketing channels to create a unified brand experience that drives engagement, builds trust, and accelerates business growth. From strategy to execution, we handle it all.
                  </p>
                  <ul className="mt-4" style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    <li>Social Media Marketing & Management</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Pay-Per-Click Advertising (PPC)</li>
                    <li>Content Marketing & Strategy</li>
                    <li>Email Marketing Campaigns</li>
                    <li>Brand Strategy & Positioning</li>
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
                    <option value="social-media">Social Media Marketing & Management</option>
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="ppc">Pay-Per-Click Advertising (PPC)</option>
                    <option value="content-marketing">Content Marketing & Strategy</option>
                    <option value="email-marketing">Email Marketing Campaigns</option>
                    <option value="brand-strategy">Brand Strategy & Positioning</option>
                  </select>
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "15px" }}>
                  <label>Tell us what you want help with:</label>
                  <textarea rows={4} placeholder="Tell us what you want help with..." defaultValue={""} />
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
                <h2 className="count"><Counter end={1000} />+</h2>
                <p>Campaigns Launched</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".5">
              <div className="counter_item">
                <h2 className="count"><Counter end={250} />%</h2>
                <p>Average ROI Increase</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".75">
              <div className="counter_item">
                <h2 className="count"><Counter end={50} />M+</h2>
                <p>Impressions Generated</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay={1}>
              <div className="counter_item counter_item_icon">
                <h2 className="count"><Counter end={500} />+</h2>
                <p>Happy Clients</p>
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
                <h2 className="banner_title" data-text-animation="" data-split="char">Featured Campaigns</h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <p>Explore some of our recent marketing campaigns that showcase our expertise in delivering exceptional results across all marketing channels.</p>
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
                          <img src={item.img} alt={item.title} className="img-fluid w-100" style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                      </Link>
                      <Link href="portfolio_details">
                        <h3 data-text-animation="" data-split="word">{item.title}</h3>
                      </Link>
                      <p data-text-animation="slide-from-right" data-split="char">{item.category} / Marketing</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="what_we_do pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title" data-text-animation="" data-split="char">Specialized Services</h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <p>We offer a comprehensive range of digital marketing services to meet all your marketing needs.</p>
            </div>
          </div>
          <div className="row mt_60">
            <div className="col-xl-12">
              <ul className="what_we_do_list">
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/ui-ux.svg" alt="UI/UX Design" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>UI/UX Design</h3>
                    <p>Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement. We focus on user-centered design principles to deliver exceptional digital marketing experiences.</p>
                  </div>
                  <a className="circle_btn" href="/360deg-marketing">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Landing Page" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Landing Page Development</h3>
                    <p>High-converting landing pages designed to capture leads and drive sales. Our landing pages are optimized for conversions with A/B testing and performance tracking for maximum marketing impact.</p>
                  </div>
                  <a className="circle_btn" href="/360deg-marketing">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Shopify" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Shopify Development</h3>
                    <p>Custom Shopify stores with integrated marketing tools that are fully optimized for e-commerce success. We create scalable online stores with custom themes, apps, and marketing integrations.</p>
                  </div>
                  <a className="circle_btn" href="/360deg-marketing">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="WordPress" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>WordPress Development</h3>
                    <p>Custom WordPress websites and themes with marketing plugins tailored to your brand. We build fast, secure, and SEO-friendly WordPress sites with custom marketing functionality.</p>
                  </div>
                  <a className="circle_btn" href="/360deg-marketing">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Webflow" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Webflow Development</h3>
                    <p>Beautiful, responsive websites built on Webflow's powerful platform with integrated marketing tools. We leverage Webflow's design capabilities to create visually stunning marketing websites.</p>
                  </div>
                  <a className="circle_btn" href="/360deg-marketing">details</a>
                </li>
              </ul>
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
                  <h2 data-text-animation="" data-split="word" data-duration={1}>Leading Tech Agency Transforming Businesses</h2>
                </div>
                <p className="mt-4">
                  Asynk is a premier technology agency specializing in digital marketing, website development, and innovative tech services. With over 15 years of experience, we've helped hundreds of businesses establish a strong digital presence and achieve remarkable growth.
                </p>
                <p className="mt-3">
                  Our team of expert marketers, developers, designers, and strategists work together to deliver exceptional results that drive business growth and success across all digital channels.
                </p>
                <Link className="circle_btn" href="/about_us">Learn More <i className="fx-icon-next-arrow" /></Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="about_img_1">
                <div className="img">
                  <div data-animation="img-blur">
                    <img src="images/about_img_1.jpg" alt="About Asynk" className="img-fluid w-100" />
                  </div>
                </div>
                <p>We combine cutting-edge marketing strategies with creative execution to deliver campaigns that not only look great but also perform exceptionally well, delivering measurable results and ROI for our clients.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="about_img_2">
                <div data-animation="img-blur">
                  <img src="images/about_img_2.jpg" alt="Asynk Team" className="img-fluid w-100" />
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
                  <li><a href="#"><img src="images/brand_1.jpg" alt="client" className="img-fluid w-100" /></a></li>
                  <li><a href="#"><img src="images/brand_5.jpg" alt="client" className="img-fluid w-100" /></a></li>
                  <li><a href="#"><img src="images/brand_2.jpg" alt="client" className="img-fluid w-100" /></a></li>
                  <li><a href="#"><img src="images/brand_3.jpg" alt="client" className="img-fluid w-100" /></a></li>
                  <li><a href="#"><img src="images/brand_6.jpg" alt="client" className="img-fluid w-100" /></a></li>
                  <li><a href="#"><img src="images/brand_1.jpg" alt="client" className="img-fluid w-100" /></a></li>
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
