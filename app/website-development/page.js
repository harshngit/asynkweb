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
                  Website Development Services
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
                    We create stunning, responsive websites that deliver exceptional user experiences. Our development team uses cutting-edge technologies to build websites that are fast, secure, and optimized for all devices.
                  </p>
                  <p>
                    From custom web applications to e-commerce platforms, we provide end-to-end website development solutions tailored to your business needs.
                  </p>
                </div>
                <ul>
                  <li>Custom Web Development</li>
                  <li>Responsive Design</li>
                  <li>E-commerce Solutions</li>
                  <li>Content Management Systems</li>
                  <li>Web Performance Optimization</li>
                  <li>API Integration</li>
                </ul>
                <div className="mt-5">
                  <img
                    src="images/service_details.png"
                    alt="Website Development"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <h3>Modern Web Technologies</h3>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <p className="mt-0">
                  We leverage the latest web technologies including React, Next.js, Node.js, and more to build scalable and maintainable web applications. Our development process ensures your website is future-proof and ready to grow with your business.
                </p>
                <ul>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Full-Stack Solutions</li>
                  <li>Progressive Web Apps</li>
                  <li>SEO Optimization</li>
                  <li>Security Implementation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-6 col-xl-8 mb-3">
              <img src="./images/service_details-1.png" alt="Website Development" />
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <img src="./images/service_details-2.png" alt="Web Technologies" />
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-0 col-xl-2" />
            <div className="col-md-12 col-xl-10">
              <div className="tf__services_2_text">
                <h3>
                  User Experience &amp; Design Excellence
                </h3>
                <div className="d-flex">
                  <p>
                    We combine beautiful design with intuitive functionality to create websites that not only look great but also provide seamless user experiences. Our design-first approach ensures your website engages visitors and converts them into customers.
                  </p>
                  <p>
                    From wireframing to final deployment, we handle every aspect of the website development process, ensuring quality and attention to detail at every step.
                  </p>
                </div>
                <ul>
                  <li>UI/UX Design</li>
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Testing & Quality Assurance</li>
                  <li>Maintenance & Support</li>
                  <li>Analytics Integration</li>
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

