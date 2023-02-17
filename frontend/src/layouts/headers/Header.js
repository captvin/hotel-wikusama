import Link from "next/link";
import React, { Fragment, useState } from "react";
import Search from "../Search";
import Sidebar from "../Sidebar";
import { Blog, Home, Pages, Room } from "./Menu";
import MobileHeader from "./MobileHeader";

const Header = ({ headernumber }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [searchBarTrigger, setSearchBarTrigger] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);
  const mobileHeaderTrigger = () => {
    setMobileHeader(!mobileHeader);
    if (mobileHeader) {
      document.querySelector("body").classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body").classList.remove("mobile-menu-visible");
    }
  };
  return (
    <Fragment>
      <header
        className={`main-header header-style-one ${
          headernumber ? "" : "style-two"
        }`}
      >
        <div className="auto-container">
          <div className="text-center">
            {/*Logo*/}
            <div className="logo-box main-logo">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/*Nav Box*/}
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div
                  className="mobile-nav-toggler"
                  onClick={() => mobileHeaderTrigger()}
                >
                  <img src="assets/images/icons/icon-bar.png" alt="" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation">
                      <li className="dropdown">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us </Link>
                      </li>
                      <li className="dropdown">
                        <a href="/room-grid">Rooms</a>
                        
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <Pages />
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <Blog />
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="right-column">
                <div className="search-toggler">
                  <i
                    className="far fa-search"
                    onClick={() => setSearchBarTrigger(true)}
                  />
                </div>
                <div className="menu-bar sidemenu-nav-toggler">
                  <img
                    src="assets/images/icons/icon-bar3.png"
                    alt=""
                    onClick={() => setSidebarTrigger(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix">
                      <ul className="navigation">
                      <li>
                          <Link href="/">Home </Link>
                        </li>
                        <li>
                          <Link href="/about">About Us </Link>
                        </li>
                        <li>
                          <Link href="/room-grid">Rooms </Link>
                        </li>
                        <li className="dropdown">
                          <a href="#">Pages</a>
                          <ul>
                            <Pages />
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <Blog />
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="right-column">
                  <div
                    className="search-toggler"
                    onClick={() => setSearchBarTrigger(true)}
                  >
                    <i className="far fa-search" />
                  </div>
                  <div
                    className="menu-bar sidemenu-nav-toggler"
                    onClick={() => setSidebarTrigger(true)}
                  >
                    <img src="assets/images/icons/icon-bar3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <MobileHeader closeMobileHeader={() => mobileHeaderTrigger()} />
        {/* End Mobile Menu */}
        <div
          className="nav-overlay"
          style={{ display: sidebarTrigger ? "block" : "none" }}
          onClick={() => setSidebarTrigger(false)}
        >
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
      </header>
      <Sidebar
        open={sidebarTrigger}
        closeSidebar={() => setSidebarTrigger(false)}
      />
      <Search
        open={searchBarTrigger}
        closeSidebar={() => setSearchBarTrigger(false)}
      />
    </Fragment>
  );
};
export default Header;
