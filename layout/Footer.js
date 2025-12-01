import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt_120 xs_pt_80">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-sm-8 col-md-6 col-lg-4">
            <div className="footer_content">
              <Link className="footer_logo" href="/">
                <img
                  src="images/Logo/logo_white.svg"
                  alt="Asynk -tech agency"
                  className="img-fluid w-100"
                />
              </Link>
              <p>
                Leading digital agency specializing in website development, mobile apps, digital marketing, and AI/ML solutions. Transforming businesses through innovative technology and creative solutions.
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-3 col-md-6 col-lg-2">
            <ul className="footer_menu">
              <li>
                <Link
                  href="/"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about_us"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-sm-3 col-md-6 col-lg-2">
            <ul className="footer_menu">
              <li>
                <Link
                  href="/website-development"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/app-development"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/360deg-marketing"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  AI/ML
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Address</h3>
              <p>
                311, 3rd floor, Ghyansham Enclave,<br />
                Lalji Pada, near Dhanukar Wadi Metro Station,<br />
                Kandivali West, Mumbai
              </p>
              <p style={{ marginTop: "20px" }}>
                <a href="mailto:work@asynk.in">work@asynk.in</a>
              </p>
              <p>
                <a href="tel:+918928884804">+91 89288 84804</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer_copyright">
              <p>Copyright © 2024 Asynk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
