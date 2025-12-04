"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import Link from "next/link";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="main_menu navbar d-none d-xl-flex">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="images/Logo/logo.png"
                alt="Asynk -tech agency"
                className="img-fluid w-100"
              />
            </Link>
            <div className="main-menu">
              <nav className="navbar-nav m-auto" id="navbarNav">
                <ul>
                  <li>
                    <Link href="/" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Home"} />
                    </Link>
                  </li>
                  <li>
                    <Link href="about_us" className="text_hover_animaiton">
                      <TextHoverAnimation text={"About"} />
                    </Link>
                  </li>
                  <li className="dropdown-nav">
                    <a href="#" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Service"} />
                    </a>
                    <ul className="submenu">
                      <li>
                        <Link href="/website-development">Website Development</Link>
                      </li>
                      <li>
                        <Link href="/app-development">App Development</Link>
                      </li>
                      <li>
                        <Link href="/360deg-marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/ai">AI/ML</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Contact"} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right_menu">
              <Link href="contact" className="common_btn">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-menu d-xl-none main_menu d-flex">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="navbar-brand">
              <Link href="index">
                <img
                  src="images/Logo/logo.png"
                  alt="Asynk -tech agency"
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="text-end">
              <a
                className="menu-bar navbar-toggler"
                href="javascript:void(0)"
              >
                <i className="fa-solid fa-bars" />
              </a>
            </div>
          </div>
        </div>
        <div className="mobile_menu_container">
          <div className="mobile_menu_content">
            <div className="d-flex align-items-center justify-content-between">
              <div className="navbar-brand">
                <Link href="index">
                  <img
                    src="images/Logo/logo.png"
                    alt="Asynk -tech agency"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="close_btn">
                <button>
                  <i className="fal fa-times" />
                </button>
              </div>
            </div>
            <div className="main-menu-mobile">
              <nav className="navbar-nav">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about_us">About</Link>
                  </li>
                  <li className="dropdown-nav">
                    <a href="#">Service</a>
                    <ul className="submenu">
                      <li>
                        <Link href="/website-development">Website Development</Link>
                      </li>
                      <li>
                        <Link href="/app-development">App Development</Link>
                      </li>
                      <li>
                        <Link href="/360deg-marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/ai">AI/ML</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
