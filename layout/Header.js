"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import Link from "next/link";
import { Fragment, useEffect } from "react";
const Header = () => {
  useEffect(() => {
    // Mobile menu toggle
    const menuBar = document.querySelector(".menu-bar");
    const mobileMenuContent = document.querySelector(".mobile_menu_content");
    const closeBtn = document.querySelector(".close_btn button");
    const bodyOverlay = document.querySelector(".body-overlay");
    const desktopDropdowns = document.querySelectorAll(
      ".main-menu .dropdown-nav > a"
    );

    const handleMenuOpen = (e) => {
      e.preventDefault();
      if (mobileMenuContent) {
        mobileMenuContent.classList.add("opened");
      }
      if (bodyOverlay) {
        bodyOverlay.classList.add("apply");
      }
      document.body.style.overflow = "hidden";
    };

    const handleMenuClose = () => {
      if (mobileMenuContent) {
        mobileMenuContent.classList.remove("opened");
      }
      if (bodyOverlay) {
        bodyOverlay.classList.remove("apply");
      }
      document.body.style.overflow = "";
    };

    const handleOverlayClose = () => {
      if (mobileMenuContent) {
        mobileMenuContent.classList.remove("opened");
      }
      if (bodyOverlay) {
        bodyOverlay.classList.remove("apply");
      }
      document.body.style.overflow = "";
    };

    if (menuBar) {
      menuBar.addEventListener("click", handleMenuOpen);
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", handleMenuClose);
    }

    if (bodyOverlay) {
      bodyOverlay.addEventListener("click", handleOverlayClose);
    }

    // Desktop dropdown toggle (click support for touch devices)
    const handleDesktopDropdown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = e.currentTarget.parentElement;
      const isOpen = parent.classList.contains("open");
      document
        .querySelectorAll(".main-menu .dropdown-nav")
        .forEach((item) => item.classList.remove("open"));
      if (!isOpen) {
        parent.classList.add("open");
      }
    };
    desktopDropdowns.forEach((dropdown) =>
      dropdown.addEventListener("click", handleDesktopDropdown)
    );

    const closeDesktopDropdowns = (e) => {
      const nav = document.querySelector(".main-menu");
      const clickedInsideDropdown = nav && nav.contains(e.target);
      const clickedOnDropdownLink = e.target.closest(".dropdown-nav > a");
      
      if (!clickedInsideDropdown || (clickedInsideDropdown && !clickedOnDropdownLink)) {
        document
          .querySelectorAll(".main-menu .dropdown-nav")
          .forEach((item) => item.classList.remove("open"));
      }
    };
    document.addEventListener("click", closeDesktopDropdowns);
    
    // Prevent closing when clicking inside the submenu
    const handleSubmenuClick = (e) => {
      e.stopPropagation();
    };
    const submenuLinks = document.querySelectorAll(".main-menu .submenu a");
    submenuLinks.forEach((link) => {
      link.addEventListener("click", handleSubmenuClick);
    });

    // Mobile dropdown toggle
    const dropdownNavs = document.querySelectorAll(
      ".main-menu-mobile .dropdown-nav > a"
    );
    const handleMobileDropdown = function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      const parent = this.parentElement;
      const toggleBtn = this.querySelector(".dropdown-toggle-btn");

      if (submenu) {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
          if (toggleBtn) {
            toggleBtn.classList.remove("dropdown-opened");
          }
          parent.classList.remove("expanded");
        } else {
          submenu.style.display = "block";
          if (toggleBtn) {
            toggleBtn.classList.add("dropdown-opened");
          }
          parent.classList.add("expanded");
        }
      }
    };
    dropdownNavs.forEach((dropdownNav) =>
      dropdownNav.addEventListener("click", handleMobileDropdown)
    );

    return () => {
      desktopDropdowns.forEach((dropdown) =>
        dropdown.removeEventListener("click", handleDesktopDropdown)
      );
      document.removeEventListener("click", closeDesktopDropdowns);
      submenuLinks.forEach((link) => {
        link.removeEventListener("click", handleSubmenuClick);
      });
      dropdownNavs.forEach((dropdownNav) =>
        dropdownNav.removeEventListener("click", handleMobileDropdown)
      );
      if (menuBar) {
        menuBar.removeEventListener("click", handleMenuOpen);
      }
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleMenuClose);
      }
      if (bodyOverlay) {
        bodyOverlay.removeEventListener("click", handleOverlayClose);
      }
    };
  }, []);

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
                    <a href="#">
                      Service
                      <button className="dropdown-toggle-btn">
                        <i className="fa-light fa-chevron-right" />
                      </button>
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
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="body-overlay"></div>
      </header>
    </Fragment>
  );
};
export default Header;
