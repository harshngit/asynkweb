import Question from "@/components/Question";
import TestimonialSlider from "@/components/TestimonialSlider";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
  ABOUT US 2 START
    ===============================*/}
      <section className="tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading">
                <h5>ABOUT US</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  We help our client succeed by creating identities, digital
                  experiences
                </h2>
              </div>
              <div className="about_text_2">
                <p>
                Asynk is your all-in-one tech partner. We build AI tools, websites, and marketing systems that help businesses scale without limits. Fast execution. Smart solutions. Real results.
                </p>
                <Link
                  className="circle_btn circle_btn_2 learn_more_2"
                  href="services"
                >
                  <i className="fx-icon-long-next-arrow" /> View All Our <br />
                  News
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about_us_2_img">
                <div data-animation="img-blur" data-scroll={0} data-delay={0}>
                  <img
                    src="images/about_img_3.png"
                    alt="about us"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about_text_2_details section_heading">
                <h5>OUR STORY</h5>
                <p>
                Let our team of professionals help you build a strong and future-ready brand strategy—because your brand is the most valuable asset your business owns. Our dedicated team of researchers, strategists, designers, developers, and project managers works seamlessly to break through organizational challenges with efficient, streamlined processes. We don’t just conduct research; we transform insights into meaningful, innovative solutions that shape thoughtful, cohesive, and high-impact brands.
                </p>
                <p>
                Step onto the runway with confidence as you unveil a bold collection of dyed denim pieces, thoughtfully crafted by our expert team. This lineup celebrates the rising trend of patchwork denim—highly favored by today’s younger audiences—while weaving in elements of sustainability that add depth, texture, and individuality to every piece. Our refreshed take on grunge and streetwear redefines sustainable fashion, pushing creative boundaries and elevating the aesthetic to an entirely new level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  ABOUT US 2 END
    ===============================*/}
      {/*===============================
  COUNTER 3 START
    ===============================*/}
      <section className="counter counter_3 mt_80 xs_mt_30 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="counter_img">
                <img
                  src="images/counter_img_2.png"
                  alt="counter"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                  >
                    <h2 className="count">60+</h2>
                    <p>Websites Created</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay=".75"
                  >
                    <h2 className="count">100+</h2>
                    <p>Clients Served</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay={1}
                  >
                    <h2 className="count">80+</h2>
                    <p>In-house Automations</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                    data-delay="1.25"
                  >
                    <h2 className="count">10+</h2>
                    <p>Proprietary Softwares</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  COUNTER 3 END
    ===============================*/}
      {/*============================
  TEAM START
    =============================*/}
      {/* <section className="tf__team tf__team_about mt_120 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-md-8">
              <div className="section_heading section_heading_2">
                <h2>Let’s Check our creative team.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                  nullam inceptos placerat aliquet taciti conubia himenaeos
                  elementum mattis per velit eleifend ridiculus.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="team_page"
          >
            <i className="fx-icon-long-next-arrow" /> See All Team <br />
            Member
          </Link>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay=".5"
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_1.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Wade Warren</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay=".75"
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_2.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Willy Tommy</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay={1}
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_3.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Jacob Wilson</h3>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*============================
  TEAM END
    =============================*/}
      {/*===============================
  TESTIMONIAL START
    ===============================*/}
      <section className="testimonial pt_120 mt_120 xs_mt_70">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
      {/*===============================
  TESTIMONIAL END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
