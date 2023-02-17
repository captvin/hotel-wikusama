import React from "react";

const Sidebar = ({ open, closeSidebar }) => {
  return (
    <section
      className={`hidden-sidebar  ${open ? "active-sidebar" : "close-sidebar"}`}
    >
      <div className="wrapper-box">
        <div className="content-wrapper">
          <div className="hidden-sidebar-close">
            <span className="flaticon-remove" onClick={() => closeSidebar()} />
          </div>
          <div className="about-widget widget">
            <div className="logo">
              <img src="assets/images/logo-light.png" alt="" />
            </div>
            <div className="text">
              We Have Over 40 Payment Ways for Locking the Lowest Room Rates. No
              Credit Card Needed! Read Reviews from Verified Guests.
            </div>
          </div>
          <div className="instagram-widget widget">
            <h4>Instagram Feeds</h4>
            <div className="inner-box">
              <div className="wrapper-box">
                <div className="image">
                  <img src="assets/images/news/news-ins-2.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-1.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-3.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-2.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-4.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-3.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-5.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-4.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-6.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-5.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-7.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-6.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-8.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-7.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins-9.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-8.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/news/news-ins.jpg" alt="" />
                  <div className="overlay-link">
                    <a
                      href="assets/images/gallery/instagram-1.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /.gallery-wrapper */}
            </div>
          </div>
          <div className="widget contact-widget">
            <h4>Get In Touch</h4>
            <div className="text">
              Welcome to Alloggio, where comfort is everything.
            </div>
            <ul>
              <li>
                <i className="fal fa-phone" />
                <a href="https://api.whatsapp.com/send/?phone=6282335117847&text&type=phone_number&app_absent=0">6282335117847</a>
              </li>
              <li>
                <i className="fal fa-envelope" />
                <a href="mailto:info@webmail.com">WikuHotel@gmail.com</a>
              </li>
              <li>
                <i className="fal fa-map-marker-alt" />
                <a href="https://www.google.co.id/maps/place/SMK+Telkom+Malang/@-7.9768567,112.6568273,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd6285c5c1b44e3:0xf6c889ac7452dc3a!8m2!3d-7.976862!4d112.659016!16s%2Fg%2F1wjspsfl?hl=en">Jl. Danau Ranau</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
