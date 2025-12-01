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
    { title: "AI Chatbot Solution", img: "images/futured_work_img_1.jpg", category: "Chatbot" },
    { title: "Machine Learning Platform", img: "images/futured_work_img_2.jpg", category: "ML" },
    { title: "AI Analytics Dashboard", img: "images/futured_work_img_3.jpg", category: "Analytics" },
    { title: "Natural Language Processing", img: "images/futured_work_img_4.jpg", category: "NLP" },
    { title: "Computer Vision System", img: "images/futured_work_img_5.jpg", category: "CV" },
    { title: "Predictive Analytics", img: "images/futured_work_img_6.jpg", category: "AI/ML" },
  ];

  return (
    <FxotaryLayout>
      <section className="tf__contact_page mt_190 xs_mt_150 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="section_heading">
                <h2 className="banner_title">AI/ML Services & Solutions</h2>
                <div className="mt_30">
                  <p>
                    Harness the power of artificial intelligence to transform your business operations. Our AI solutions help automate processes, gain valuable insights, and create intelligent applications that learn and adapt to your business needs.
                  </p>
                  <p className="mt-3">
                    From machine learning models to natural language processing and computer vision, we develop custom AI solutions that solve real business challenges and drive innovation. Our expert team works with you to implement AI technologies that deliver measurable business value.
                  </p>
                  <ul className="mt-4" style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    <li>Machine Learning & Deep Learning</li>
                    <li>Natural Language Processing (NLP)</li>
                    <li>Computer Vision & Image Recognition</li>
                    <li>AI Chatbots & Virtual Assistants</li>
                    <li>Predictive Analytics & Forecasting</li>
                    <li>Custom AI Model Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <form className="tf__contact_form">
                <h3 className="mb-4">Get a Free Quote</h3>
                <div className="tf__contact_form_imput" style={{ marginBottom: "30px" }}>
                  <label>Full Name:</label>
                  <input type="text" placeholder="e.g. John Doe" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "30px" }}>
                  <label>Email:</label>
                  <input type="email" placeholder="e.g. youremail@gmail.com" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "30px" }}>
                  <label>Phone:</label>
                  <input type="text" placeholder="e.g. +1 234 567 8900" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "30px" }}>
                  <label>AI Solution Needed:</label>
                  <input type="text" placeholder="e.g. Chatbot, ML Model, Analytics" />
                </div>
                <div className="tf__contact_form_imput" style={{ marginBottom: "30px" }}>
                  <label>Message:</label>
                  <textarea rows={4} placeholder="Tell us about your AI project..." defaultValue={""} />
                </div>
                <button className="circle_btn circle_btn_2 learn_more_2" type="submit" style={{ padding: "12px 40px", height: "auto", width: "auto" }}>
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
                <h2 className="count"><Counter end={200} />+</h2>
                <p>AI Solutions Deployed</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".5">
              <div className="counter_item">
                <h2 className="count"><Counter end={85} />%</h2>
                <p>Process Automation</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay=".75">
              <div className="counter_item">
                <h2 className="count"><Counter end={30} />+</h2>
                <p>AI/ML Experts</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-animation="fade-right" data-delay={1}>
              <div className="counter_item counter_item_icon">
                <h2 className="count"><Counter end={5} />+</h2>
                <p>Years AI Experience</p>
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
                <h2 className="banner_title" data-text-animation="" data-split="char">Featured AI Projects</h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <p>Explore some of our recent AI/ML projects that showcase our expertise in developing intelligent solutions that drive business value.</p>
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
                      <p data-text-animation="slide-from-right" data-split="char">{item.category} / AI/ML</p>
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
              <p>We offer a comprehensive range of AI/ML services to meet all your intelligent automation needs.</p>
            </div>
          </div>
          <div className="row mt_60">
            <div className="col-xl-12">
              <ul className="what_we_do_list">
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/ui-ux.svg" alt="UI/UX Design" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>UI/UX Design</h3>
                    <p>Creating intuitive and visually appealing interfaces for AI-powered applications that enhance user experience and drive engagement. We focus on user-centered design principles to deliver exceptional AI experiences.</p>
                  </div>
                  <a className="circle_btn" href="/ai">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Landing Page" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Landing Page Development</h3>
                    <p>High-converting landing pages for AI products designed to capture leads and drive sales. Our landing pages are optimized with AI-powered personalization and conversion tracking.</p>
                  </div>
                  <a className="circle_btn" href="/ai">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Shopify" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Shopify Development</h3>
                    <p>AI-powered Shopify stores with intelligent product recommendations and chatbots. We create scalable e-commerce solutions with custom AI integrations to boost your sales and customer experience.</p>
                  </div>
                  <a className="circle_btn" href="/ai">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="WordPress" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>WordPress Development</h3>
                    <p>Custom WordPress websites with AI plugins and features tailored to your brand. We build intelligent, secure, and SEO-friendly WordPress sites with custom AI functionality.</p>
                  </div>
                  <a className="circle_btn" href="/ai">details</a>
                </li>
                <li data-animation="" className="image-view">
                  <div className="icon"><img src="icons/web-programming.svg" alt="Webflow" className="img-fluid w-100 svg" /></div>
                  <div className="text">
                    <h3>Webflow Development</h3>
                    <p>Beautiful, responsive websites built on Webflow with integrated AI capabilities. We leverage Webflow's design capabilities to create visually stunning websites enhanced with intelligent features.</p>
                  </div>
                  <a className="circle_btn" href="/ai">details</a>
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
                  Asynk is a premier technology agency specializing in AI/ML solutions, website development, and innovative tech services. With over 15 years of experience, we've helped hundreds of businesses leverage artificial intelligence to transform their operations.
                </p>
                <p className="mt-3">
                  Our team of expert AI/ML engineers, data scientists, developers, and strategists work together to deliver exceptional results that drive business growth and innovation through intelligent automation.
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
                <p>We combine cutting-edge AI technology with creative solutions to build intelligent systems that not only solve complex problems but also deliver measurable results and ROI for our clients.</p>
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
