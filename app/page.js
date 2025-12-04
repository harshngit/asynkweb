"use client";
import Counter from "@/components/Counter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
  BANNER START
    ===============================*/}
      <section
        className="banner"
        style={{ background: "url(images/banner_bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner_text">
                <h4>We are Tech Agency</h4>
                <h1 className="banner_title">
                  The Team You{" "}
                  <span>
                    Always <b>Need.</b>
                  </span>
                </h1>
              </div>
              <div className="banner_img">
                {/* <div className="overflow-hidden">
                  <img
                    src="images/banner_img_1.png"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <ul className="d-flex flex-wrap">
          <li>
            <span>Follow Us</span>
          </li>
          <li>
            <a href="#">Fb.</a>
          </li>
          <li>
            <a href="#">Be.</a>
          </li>
          <li>
            <a href="#">Yt.</a>
          </li>
        </ul>
      </section>
      {/*===============================
  BANNER END
    ===============================*/}
      {/*===============================
  ABOUT START
    ===============================*/}
      <section className="about_us pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7 col-sm-12 col-12">
              <div className="about_text">
                <div className="section_heading">
                  <h5 data-text-animation="">ABOUT COMPANY</h5>
                  <h2
                    data-text-animation=""
                    data-split="word"
                    data-duration={1}
                  >
                   Where Ideas Sync With Innovation
                  </h2>
                </div>
                <Link className="circle_btn" href="about_us">
                  Learn More <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="about_img_1">
                <div className="img">
                  <div data-animation="img-blur">
                    <img
                      src="images/about_img_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <p>
                Asynk is a modern digital agency delivering powerful AI solutions, website development, and marketing strategies that help businesses grow faster. We blend creativity with cutting-edge technology to build digital experiences that drive real results.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12 col-12">
              <div className="about_img_2">
                <div data-animation="img-blur">
                  <img
                    src="images/about_img_2.jpg"
                    alt="about"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  ABOUT END
    ===============================*/}
      {/*===============================
  WHAT WE DO START
    ===============================*/}
      <section className="what_we_do pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-7 col-sm-12 col-12">
              <div className="what_we_do_text">
                <p>
                Asynk delivers smart digital solutions through Marketing, Website Development, AI/ML Development, and Mobile App Development — helping businesses grow with powerful design, intelligent automation, and modern technology.
                </p>
                <a className="view_btn" href="#">
                  View All Services <i className="fx-icon-next-arrow" />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-md-5 col-sm-12 col-12">
              <div className="section_heading">
                <h5 data-text-animation="">WHAT WE DO</h5>
                <h2 data-text-animation="" data-split="word">
                  Expertise Field.
                </h2>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <ul>
                <Link href="/360deg-marketing">
                <li
               
               data-animation=""
               className="image-view"
               data-img-cursor="<img src='images/what_we_do_img.jpg' />"
             >
               <div className="icon">
                 <img
                   src="icons/ui-ux.svg"
                   alt="about"
                   className="img-fluid w-100 svg"
                 />
               </div>
               <div className="text">
                 <h3>Marketing</h3>
                 <p style={{color:"#000 !important"}}>
                 Boost your brand with creative strategies, targeted campaigns, and performance-driven marketing that delivers real results.
                 </p>
               </div>
               <div className="img">
                 <img
                   src="images/what_we_do_img.jpg"
                   alt="what we do"
                   className="img-fluid w-100"
                 />
               </div>
               {/* <Link className="circle_btn" href="/360deg-marketing">
                 details
               </Link> */}
             </li>
                </Link>
                <Link href="/website-development">
                  <li
                    data-animation=""
                    className="image-view"
                    data-img-cursor="<img src='images/what_we_do_img.jpg' />"
                  >
                    <div className="icon">
                      <img
                        src="icons/web-programming.svg"
                        alt="about"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                    <div className="text">
                      <h3>Website Development</h3>
                      <p style={{color:"#000 !important"}}>
                      Modern, responsive websites designed for speed, usability, and conversions — built to represent your brand and grow your business.
                      </p>
                    </div>
                    <div className="img">
                      <img
                        src="images/what_we_do_img.jpg"
                        alt="what we do"
                        className="img-fluid w-100"
                      />
                    </div>
                    {/* <Link className="circle_btn" href="/website-development">
                      details
                    </Link> */}
                  </li>
                </Link>
                <Link href="/ai">
                  <li
                    data-animation=""
                    className="image-view"
                    data-img-cursor="<img src='images/what_we_do_img.jpg' />"
                  >
                    <div className="icon">
                      <i className="fa-solid fa-brain" style={{ fontSize: "50px", color: "var(--colorPrimary)" }}></i>
                    </div>
                    <div className="text">
                      <h3>AI/ML Development</h3>
                      <p style={{color:"#000 !important"}}>
                      Smart AI solutions that automate tasks, analyze data, and enhance customer experiences with intelligent technology.
                      </p>
                    </div>
                    <div className="img">
                      <img
                        src="images/what_we_do_img.jpg"
                        alt="what we do"
                        className="img-fluid w-100"
                      />
                    </div>
                    {/* <Link className="circle_btn" href="/ai">
                      details
                    </Link> */}
                  </li>
                </Link>
                <Link href="/app-development">
                  <li
                    data-animation=""
                    className="image-view"
                    data-img-cursor="<img src='images/what_we_do_img.jpg' />"
                  >
                    <div className="icon">
                      <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: "50px", color: "var(--colorPrimary)" }}></i>
                    </div>
                    <div className="text">
                      <h3>Mobile App Development</h3>
                      <p style={{color:"#000 !important"}}>
                      High-performance mobile apps for Android and iOS that are fast, user-friendly, and built to scale.
                      </p>
                    </div>
                    <div className="img">
                      <img
                        src="images/what_we_do_img.jpg"
                        alt="what we do"
                        className="img-fluid w-100"
                      />
                    </div>
                    {/* <Link className="circle_btn" href="/app-development">
                      details
                    </Link> */}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  WHAT WE DO END
    ===============================*/}
      {/*===============================
  LATEST PROJECT START
    ===============================*/}
      <section className="latest_project pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6 col-sm-12 col-12">
              <div className="latest_project_text">
                <div className="section_heading">
                  <h5>LATEST PROJECTS</h5>
                  <h2 data-text-animation="" data-split="char">
                    Here's our latest projects
                  </h2>
                </div>
                <p>
                Our latest websites are built with speed, precision, and purpose. Designed to convert, optimized to perform, and engineered for long-term success.
                </p>
              </div>
              <Link
                href="https://houseofmusk.in/" 
                target="_blank"
                className="latest_project_img d-block cursor-arrow c-pointer"
                data-cursor='<i class="fx-icon-long-next-arrow"></i>'
              >
                <div data-animation="img-blur">
                  <img
                    src="images/latestproject/1.webp"
                    alt="projext"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="text d-flex flex-column">
                  <h3>Ecommerce Website</h3>
                </div>
              </Link>
            </div>
            <div className="col-xl-5 col-md-6 col-sm-12 col-12">
              <Link
              href="https://reelreports.ai/"
              target="_blank"
                className="latest_project_img d-block cursor-arrow latest_project_img_2 c-pointer"
                data-cursor='<i class="fx-icon-long-next-arrow"></i>'
              >
                <div data-animation="img-blur">
                  <img
                    src="images/latestproject/2.webp"
                    alt="projext"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="text d-flex flex-column">
                  <h3>AI Powered Video Platform</h3>
                </div>
              </Link>
              <h4>Want to See More Projects</h4>
            </div>
          </div>
        </div>
        {/* <div className="row mt_175 marquee_section">
          <div className="col-12 col-sm-12">
            <div className="marquee-container">
              <Marquee className="marquee_animi" direction="left">
                <ul className="project_slider d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <p>UI/UX Design</p>
                      <div className="img">
                        <img
                          src="images/project_iten_img.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <span>03</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Digital Marketing</p>
                      <div className="img">
                        <img
                          src="images/project_iten_img.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <span>05</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Web Development</p>
                      <div className="img">
                        <img
                          src="images/project_iten_img.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <span>07</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Web Design</p>
                      <div className="img">
                        <img
                          src="images/project_iten_img.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <span>14</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Graphic Design</p>
                      <div className="img">
                        <img
                          src="images/project_iten_img.jpg"
                          alt="project"
                          className="img-fluid"
                        />
                        <span>42</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
          <div className="col-12 mt_30">
            <Marquee className="marquee_animi2" direction="right">
              <ul className="project_slider d-flex flex-wrap">
                <li>
                  <a href="#">
                    <p>UI/UX Design</p>
                    <div className="img">
                      <img
                        src="images/project_iten_img.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                      <span>03</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Digital Marketing</p>
                    <div className="img">
                      <img
                        src="images/project_iten_img.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                      <span>05</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Web Development</p>
                    <div className="img">
                      <img
                        src="images/project_iten_img.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                      <span>07</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Web Design</p>
                    <div className="img">
                      <img
                        src="images/project_iten_img.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                      <span>14</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Graphic Design</p>
                    <div className="img">
                      <img
                        src="images/project_iten_img.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                      <span>42</span>
                    </div>
                  </a>
                </li>
              </ul>
            </Marquee>
          </div>
        </div> */}
      </section>
      {/*===============================
  LATEST PROJECT END
    ===============================*/}
      {/*===============================
  COUNTER START
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
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" data-animation="fade-right">
              <div className="counter_item counter_item_icon">
                <h2 className="count">
                  <Counter end={10} />k
                </h2>
                <p>Project completed</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" data-animation="fade-right" data-delay=".5">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={180} />
                </h2>
                <p>Skilled Professional</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" data-animation="fade-right" data-delay=".75">
              <div className="counter_item">
                <h2 className="count">
                  <Counter end={500} />
                </h2>
                <p>Visited Conference</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" data-animation="fade-right" data-delay={1}>
              <div className="counter_item counter_item_icon">
                <h2 className="count">
                  <Counter end={30} />k
                </h2>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  COUNTER END
    ===============================*/}
      {/*===============================
  ACHIVEMENT START
    ===============================*/}
      {/* <section className="achivement pt_100 xs_pt_50 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section_heading">
                <h5>ACHIVEMENTS</h5>
                <h2 data-text-animation="" data-split="word">
                  Company awards &amp; achievements
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="achivement_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt_50">
            <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4 col-sm-12 col-12">
              <div className="achivement_img">
                <div className="img_1">
                  <div data-animation="img-blur">
                    <img
                      src="images/achivement_img_1.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="img_2">
                  <div data-animation="img-blur">
                    <img
                      src="images/achivement_img_2.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8 col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="achivement_list">
                <ul>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_1.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Awwwards Interior excellence.</h4>
                      <span>2015</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_2.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Site of the Year Awards.</h4>
                      <span>2018</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_3.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Template of the seasons in this month.</h4>
                      <span>2020</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_4.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Selling of this week &amp; month.</h4>
                      <span>2023</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*===============================
  ACHIVEMENT END
    ===============================*/}
      {/*===============================
  TESTIMONIAL START
    ===============================*/}
      {/* <section className="testimonial pt_120">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section> */}
      {/*===============================
  TESTIMONIAL END
    ===============================*/}
      {/*===============================
  BLOG START
    ===============================*/}
      {/* <section className="blog pt_120 xs_pt_80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-8 col-sm-12 col-12">
              <div className="section_heading">
                <h5>LATEST NEWS</h5>
                <h2 data-text-animation="" data-split="word">
                  Latest News &amp; Updates.
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="blog_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  lobortis sagittis, velit nec vehicula netus elementum interdum
                  ultricies hendrerit tristique.
                </p>
                <Link className="circle_btn" href="blog_grid">
                  View All <br />
                  Our News <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-animation="fade-left">
              <div className="single_blog first_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>User Experience</li>
                    <li>September 10, 2023</li>
                  </ul>
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img w-100"
                  >
                    <div data-animation="img-blur" className="w-100">
                      <img
                        src="images/blog_1.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>User Experience</li>
                    <li>September 10, 2023</li>
                  </ul>
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img w-100"
                  >
                    <div data-animation="img-blur" className="w-100">
                      <img
                        src="images/blog_2.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12"
              data-animation="fade-left"
              data-delay={1}
            >
              <div className="single_blog last_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>User Experience</li>
                    <li>September 10, 2023</li>
                  </ul>
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img w-100"
                  >
                    <div data-animation="img-blur" className="w-100">
                      <img
                        src="images/blog_3.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*===============================
  BLOG END
    ===============================*/}
      {/*============================
  BRAND START
    =============================*/}
      {/* <section className="tf__brand pt_100 xs_pt_60 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_1.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_5.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_2.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_3.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_6.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_4.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section> */}
      {/*============================
  BRAND END
    =============================*/}
    </FxotaryLayout>
  );
};
export default page;
