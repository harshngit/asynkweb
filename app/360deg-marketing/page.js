import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title">
                  360deg Marketing Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt_30 xs_mt_50 item_1">
            <div className="col-xl-4 col-md-6" />
            <div className="col-xl-8 col-md-6">
              <div className="tf__services_2_text">
                <div className="d-flex">
                  <p>
                    Comprehensive 360-degree marketing solutions that cover every aspect of your digital presence. We create integrated marketing strategies that connect all touchpoints with your audience, ensuring consistent messaging and maximum impact.
                  </p>
                  <p>
                    Our holistic approach combines traditional and digital marketing channels to create a unified brand experience that drives engagement, builds trust, and accelerates business growth.
                  </p>
                </div>
                <ul>
                  <li>Digital Marketing Strategy</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Search Engine Marketing</li>
                  <li>Brand Management</li>
                </ul>
                <div className="mt-5">
                  <img
                    src="images/service_details.png"
                    alt="360deg Marketing"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <h3>Integrated Marketing Channels</h3>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <p className="mt-0">
                  We orchestrate campaigns across multiple channels including social media, search engines, email, content platforms, and traditional media. Our integrated approach ensures your brand message reaches your target audience wherever they are, creating multiple opportunities for engagement and conversion.
                </p>
                <ul>
                  <li>SEO & SEM Strategies</li>
                  <li>Social Media Campaigns</li>
                  <li>Content Creation & Distribution</li>
                  <li>Influencer Partnerships</li>
                  <li>Video Marketing</li>
                  <li>Retargeting & Remarketing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-6 col-xl-8 mb-3">
              <img src="./images/service_details-1.png" alt="Marketing Strategy" />
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <img src="./images/service_details-2.png" alt="Digital Marketing" />
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-0 col-xl-2" />
            <div className="col-md-12 col-xl-10">
              <div className="tf__services_2_text">
                <h3>
                  Analytics & Performance Optimization
                </h3>
                <div className="d-flex">
                  <p>
                    Data-driven marketing decisions powered by comprehensive analytics and insights. We track and measure performance across all channels, providing detailed reports and recommendations to continuously optimize your marketing efforts for better results.
                  </p>
                  <p>
                    Our team uses advanced analytics tools to monitor campaign performance, analyze customer behavior, and identify opportunities for improvement, ensuring your marketing budget delivers maximum ROI.
                  </p>
                </div>
                <ul>
                  <li>Performance Analytics</li>
                  <li>Conversion Tracking</li>
                  <li>A/B Testing</li>
                  <li>Customer Journey Mapping</li>
                  <li>ROI Analysis</li>
                  <li>Marketing Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};
export default page;

