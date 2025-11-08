"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Images
import logo from "@/assets/images/logo.png";

// --------------

import { useMenu } from "@/context/MenuContext";

const Header = () => {
  const { menuOpen, setMenuOpen } = useMenu();

  const pathname: string = usePathname();

  const toggleNav = () => setMenuOpen((prev: boolean) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header */}
      <div className={"menu-holder-front " + (menuOpen && "open")}>
        <div className="header-logo">
          <Link href="/">
            <img src={logo.src} alt="Pekko" />
          </Link>
        </div>

        <div className="toggle-holder">
          <div
            id="toggle"
            className={"all-loaded " + (menuOpen && "on")}
            onClick={toggleNav}
          >
            <div className="menu-line"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-holder-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-holder-back"
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(50px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(50px)` }}
              className="menu-wrapper-back"
            >
              <div className="menu-left">
                <nav id="header-main-menu">
                  <ul className="main-menu sm sm-clean">
                    <li>
                      <span className="menu-num">01</span>
                      <Link
                        href="/"
                        className={pathname === "/" ? "current" : ""}
                        onClick={handleCloseMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <span className="menu-num">02</span>
                      <Link
                        href="/story"
                        className={pathname === "/story/" ? "current" : ""}
                        onClick={handleCloseMenu}
                      >
                        Story
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="menu-right-text">
                  <p className="menu-text-title">EMAIL</p>
                  <a
                    className="menu-text contact-item"
                    href="mailto:atrchstudio@gmail.com"
                  >
                    <i className="fa-brands fa-google social-icon3"></i>
                    atrchstudio@gmail.com
                  </a>

                  <p className="menu-text-title">PHONE</p>
                  <a className="menu-text contact-item" href="tel:+96171601751">
                    <i className="fa-brands fa-whatsapp social-icon4"></i>
                    +961 71 601 751
                  </a>

                  <p className="menu-text-title">LOCATION</p>
                  <div className="menu-text">
                    Tyre, Lebanon, <br />
                    Beirut, Lebanon
                  </div>

                  <div className="social-holder">
                    <a
                      className="social-icon1"
                      href="https://www.instagram.com/ahmadalatrch/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a
                      className="social-icon2"
                      href="https://www.linkedin.com/in/ahmad-alatrash-52b271104/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="menu-right">
                <div className="menu-right-form">
                  <form
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <p className="menu-text-title form-title">Contact Us</p>

                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="menu-text input-field"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="menu-text input-field"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="menu-text input-field"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="menu-text textarea-field"
                        rows={5}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="menu-text send-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

<div className="menu-holder-back">
  <div className="menu-wrapper-back">
    <nav id="header-main-menu">
      <ul className="main-menu sm sm-clean">
        <li>
          <span className="menu-num">01</span>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span className="menu-num">02</span>
          <a href="about.html">About</a>
        </li>
        <li>
          <span className="menu-num">03</span>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <span className="menu-num">04</span>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>

    <div className="menu-right-text">
      <p className="menu-text-title">EMAIL</p>
      <div className="menu-text">hello@yourwebsite.com</div>
      <br />
      <p className="menu-text-title">PHONE</p>
      <div className="menu-text">+988 345 783 174</div>
      <br />
      <p className="menu-text-title">LOCATION</p>
      <div className="menu-text">
        2546 Some Street, <br />
        US Based Left 5,
        <br />
        United States, New York
      </div>
      <br />
      <div className="social-holder">
        <a className="social-text" href="#">
          TWITTER
        </a>
        <a className="social-text" href="#">
          FACEBOOK
        </a>
        <a className="social-text" href="#">
          INSTAGRAM
        </a>
      </div>
    </div>
  </div>
</div>;
