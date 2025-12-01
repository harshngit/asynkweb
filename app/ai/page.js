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
                  AI Services & Solutions
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
                    Harness the power of artificial intelligence to transform your business operations. Our AI solutions help automate processes, gain valuable insights, and create intelligent applications that learn and adapt to your business needs.
                  </p>
                  <p>
                    From machine learning models to natural language processing and computer vision, we develop custom AI solutions that solve real business challenges and drive innovation.
                  </p>
                </div>
                <ul>
                  <li>Machine Learning Solutions</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>AI Chatbots & Virtual Assistants</li>
                  <li>Predictive Analytics</li>
                  <li>AI Integration Services</li>
                </ul>
                <div className="mt-5">
                  <img
                    src="images/service_details.png"
                    alt="AI Services"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <h3>Custom AI Development</h3>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <p className="mt-0">
                  We build custom AI systems tailored to your specific requirements. Our team of data scientists and AI engineers work with you to identify opportunities, design intelligent solutions, and implement AI technologies that deliver measurable business value.
                </p>
                <ul>
                  <li>Custom AI Model Development</li>
                  <li>Data Analysis & Processing</li>
                  <li>AI Model Training & Deployment</li>
                  <li>AI-Powered Automation</li>
                  <li>Real-Time AI Applications</li>
                  <li>AI Consulting & Strategy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-6 col-xl-8 mb-3">
              <img src="./images/service_details-1.png" alt="AI Technology" />
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <img src="./images/service_details-2.png" alt="Machine Learning" />
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-0 col-xl-2" />
            <div className="col-md-12 col-xl-10">
              <div className="tf__services_2_text">
                <h3>
                  AI-Powered Business Intelligence
                </h3>
                <div className="d-flex">
                  <p>
                    Transform your data into actionable insights with AI-powered analytics and business intelligence solutions. We help you make data-driven decisions, predict trends, and optimize operations using advanced AI algorithms and machine learning techniques.
                  </p>
                  <p>
                    Our AI solutions continuously learn from your data, improving accuracy and performance over time. We ensure your AI systems are scalable, secure, and aligned with your business objectives.
                  </p>
                </div>
                <ul>
                  <li>Business Intelligence Solutions</li>
                  <li>Data Mining & Analysis</li>
                  <li>Pattern Recognition</li>
                  <li>Anomaly Detection</li>
                  <li>Recommendation Systems</li>
                  <li>AI Maintenance & Support</li>
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

