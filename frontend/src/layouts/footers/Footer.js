import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { footerSlider } from "../../sliderProps";

const Footer = ({ noBg, extraCls }) => {
  return (
    <footer
      className={`main-footer ${extraCls ? extraCls : "style-two"}`}
      style={{
        background: noBg ? null : `url(assets/images/background/bg-1.jpg)`,
      }}
    >
      <div className="auto-container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo">
                <img src="assets/images/footer-logo.png" alt="" />
              </div>
            </div>
            <div className="column col-lg-3 col-md-6">
              <div className="widget links-widget">
                <h4>Pages</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/room-grid">Room</a>
                      </li>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget text-widget">
                <h4>Our Awards</h4>
                <div className="text">
                  When your people get up every day <br /> wanting to come to
                  work.
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-15.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-16.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-17.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget contact-widget">
                <h4>Get In Touch</h4>
                <div className="text">
                  Welcome to Alloggio, where comfort is everything.
                </div>
                <ul>
                  <li>
                    <i className="fal fa-phone" />
                    <a href="https://api.whatsapp.com/send/?phone=6282335117847&text&type=phone_number&app_absent=0">082335117847</a>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />
                    <a href=".com">alpinoke82@gmail.com</a>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    <a href="https://www.google.co.id/maps/place/SMK+Telkom+Malang/@-7.9768567,112.6568273,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd6285c5c1b44e3:0xf6c889ac7452dc3a!8m2!3d-7.976862!4d112.659016!16s%2Fg%2F1wjspsfl?hl=en">Jl. Danau Ranau</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text">Copyright Wiku Hotel. Buatan adhe alvin rill cuy.</div>
            </div>
            <div className="brand-logo">
              <Swiper
                {...footerSlider}
                className="theme_carousel swiper-container"
              >
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-18.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-19.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-20.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
