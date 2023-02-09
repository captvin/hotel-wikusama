import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../src/components/Counter";
import DatePicker from "../src/components/DatePicker";
import Header2 from "../src/layouts/headers/Header2";
import Layouts from "../src/layouts/Layouts";
import { feedBackSlider } from "../src/sliderProps";

class Index extends React.Component  {
  constructor(){
    super();
    this.state ={
      standart: 0,
      delux: 0,
      luxury: 0,
      pesident: 0,
      action: "",
      date: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date8: null,
      activeAcc: "acc-1",
      setActiveAcc: "acc-1",
      setAcc: null,
      activeLi: null,
      activebtn: null,
      activeContent: null
    }
  }

  handleActive = () => {
    this.setState({
      setAcc: (value) => setActiveAcc(value === activeAcc ? "": value),
      activeLi: (value) => (value === activeAcc ? "active-block": ""),
      activebtn: (value) => (value == activeAcc ? "active":""),
      activeContent: (value) => value === activeAcc ? {display: "block"}: {display: "none"}
    })
  }
    
  getKamar = () => {
    let url = 'http://localhost:8080/kamar/'
    axios.get(url)
      .then(res =>{
        this.setState({
          standart: res.data.standart,
          delux: res.data.delux,
          luxury: res.data.luxury,
          president: res.data.president
        })
      })
  }

  // const [activeAcc, setActiveAcc] = useState("acc-1");
  // const setAcc = (value) => setActiveAcc(value === activeAcc ? "" : value),
  //   activeLi = (value) => (value === activeAcc ? "active-block" : ""),
  //   activebtn = (value) => (value === activeAcc ? "active" : ""),
  //   activeContent = (value) => value === activeAcc ? { display: "block" } : { display: "none" };

  // const [date, setDate] = useState(null);
  // const [date2, setDate2] = useState(null);
  // const [date3, setDate3] = useState(null);
  // const [date4, setDate4] = useState(null);
  // const [date5, setDate5] = useState(null);
  // const [date6, setDate6] = useState(null);
  // const [date7, setDate7] = useState(null);
  // const [date8, setDate8] = useState(null);
  

  render(){
    return (
      <Layouts noHeader>
        <Header2 />
        {/* Bnner Section two */}
        <section
          className="banner-section-two"
          style={{
            backgroundImage: "url(assets/images/main-slider/banner-1.jpg)",
          }}
        >
          <div className="auto-container">
            <div className="tab-area">
              <Tab.Container defaultActiveKey={"tab-1"}>
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="tab-1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <h2>
                      Luxury Hotel <br /> With River View
                    </h2>
                    {/* Check availability */}
                    <div className="check-availability">
                      <div className="auto-container">
                        <form
                          className="form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="left-side">
                            <ul>
                              <li>
                                <DatePicker
                                  date={this.state.date}
                                  // onChange={setDate}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <DatePicker
                                  date={this.state.date2}
                                  // onChange={setDate2}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <select>
                                  <option data-display="Aduls">Aduls</option>
                                  <option value={1}>0 Adul</option>
                                  <option value={2}>1 Adul</option>
                                  <option value={4}>2 Aduls</option>
                                  <option value={4}>3 Aduls</option>
                                  <option value={4}>4 Aduls</option>
                                  <option value={4}>5 Aduls</option>
                                </select>
                              </li>
                              <li>
                                <select>
                                  <option data-display="Childrens">
                                    Childrens
                                  </option>
                                  <option value={1}>0 Children</option>
                                  <option value={2}>1 Children</option>
                                  <option value={4}>2 Childrens</option>
                                  <option value={4}>3 Childrens</option>
                                  <option value={4}>4 Childrens</option>
                                  <option value={4}>5 Childrens</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                          <div className="right-side">
                            <button type="submit">check availability</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <h2>
                      Luxury Hotel <br /> With River View
                    </h2>
                    {/* Check availability */}
                    <div className="check-availability">
                      <div className="auto-container">
                        <form
                          className="form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="left-side">
                            <ul>
                              <li>
                                <DatePicker
                                  date={this.state.date3}
                                  // onChange={setDate3}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <DatePicker
                                  date={this.state.date4}
                                  // onChange={setDate4}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <select>
                                  <option data-display="Aduls">Aduls</option>
                                  <option value={1}>0 Adul</option>
                                  <option value={2}>1 Adul</option>
                                  <option value={4}>2 Aduls</option>
                                  <option value={4}>3 Aduls</option>
                                  <option value={4}>4 Aduls</option>
                                  <option value={4}>5 Aduls</option>
                                </select>
                              </li>
                              <li>
                                <select>
                                  <option data-display="Childrens">
                                    Childrens
                                  </option>
                                  <option value={1}>0 Children</option>
                                  <option value={2}>1 Children</option>
                                  <option value={4}>2 Childrens</option>
                                  <option value={4}>3 Childrens</option>
                                  <option value={4}>4 Childrens</option>
                                  <option value={4}>5 Childrens</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                          <div className="right-side">
                            <button type="submit">check availability</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <h2>
                      Luxury Hotel <br /> With River View
                    </h2>
                    {/* Check availability */}
                    <div className="check-availability">
                      <div className="auto-container">
                        <form
                          className="form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="left-side">
                            <ul>
                              <li>
                                <DatePicker
                                  date={this.state.date5}
                                  // onChange={setDate5}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <DatePicker
                                  date={this.state.date6}
                                  // onChange={setDate6}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <select>
                                  <option data-display="Aduls">Aduls</option>
                                  <option value={1}>0 Adul</option>
                                  <option value={2}>1 Adul</option>
                                  <option value={4}>2 Aduls</option>
                                  <option value={4}>3 Aduls</option>
                                  <option value={4}>4 Aduls</option>
                                  <option value={4}>5 Aduls</option>
                                </select>
                              </li>
                              <li>
                                <select>
                                  <option data-display="Childrens">
                                    Childrens
                                  </option>
                                  <option value={1}>0 Children</option>
                                  <option value={2}>1 Children</option>
                                  <option value={4}>2 Childrens</option>
                                  <option value={4}>3 Childrens</option>
                                  <option value={4}>4 Childrens</option>
                                  <option value={4}>5 Childrens</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                          <div className="right-side">
                            <button type="submit">check availability</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="tab-4"
                    role="tabpanel"
                    aria-labelledby="tab-4"
                  >
                    <h2>
                      Luxury Hotel <br /> With River View
                    </h2>
                    {/* Check availability */}
                    <div className="check-availability">
                      <div className="auto-container">
                        <form
                          className="form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="left-side">
                            <ul>
                              <li>
                                <DatePicker
                                  date={this.state.date7}
                                  // onChange={setDate7}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <DatePicker
                                  date={this.state.date8}
                                  // onChange={setDate8}
                                  placeholder={`Arrival Date`}
                                />
                              </li>
                              <li>
                                <select>
                                  <option data-display="Aduls">Aduls</option>
                                  <option value={1}>0 Adul</option>
                                  <option value={2}>1 Adul</option>
                                  <option value={4}>2 Aduls</option>
                                  <option value={4}>3 Aduls</option>
                                  <option value={4}>4 Aduls</option>
                                  <option value={4}>5 Aduls</option>
                                </select>
                              </li>
                              <li>
                                <select>
                                  <option data-display="Childrens">
                                    Childrens
                                  </option>
                                  <option value={1}>0 Children</option>
                                  <option value={2}>1 Children</option>
                                  <option value={4}>2 Childrens</option>
                                  <option value={4}>3 Childrens</option>
                                  <option value={4}>4 Childrens</option>
                                  <option value={4}>5 Childrens</option>
                                </select>
                              </li>
                            </ul>
                          </div>
                          <div className="right-side">
                            <button type="submit">check availability</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                <div className="outer-box">
                  <div className="nav-tab-wrapper">
                    <Nav
                      as={"ul"}
                      className="nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <Nav.Item as="li" className="nav-item" role="presentation">
                        <Nav.Link
                          as={"button"}
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab-1"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          <span>
                            <i className="fal fa-window" /> Our Rooms
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <li className="nav-item" role="presentation">
                        <Nav.Link
                          as={"button"}
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab-2"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <span>
                            <i className="fal fa-bed" /> Room Setup
                          </span>
                        </Nav.Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Nav.Link
                          as={"button"}
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab-3"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <span>
                            <i className="fal fa-plane" /> Transport
                          </span>
                        </Nav.Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Nav.Link
                          as={"button"}
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab-4"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <span>
                            <i className="fal fa-glass" />
                            Bar &amp; Drinks
                          </span>
                        </Nav.Link>
                      </li>
                    </Nav>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>
        </section>
        {/* End Bnner Section */}
        {/* section twelve */}
        <section className="section-twelve">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-twelve">
                  <div className="image">
                    <img src="assets/images/resource/image-13.jpg" alt="" />
                  </div>
                  <div className="image-two">
                    <img src="assets/images/resource/image-12.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block-thirteen">
                  <div className="icon mb-10">
                    <img src="assets/images/icons/image-2.png" alt="" />
                  </div>
                  <h2 className="sec-title">
                    Welcome To Our <br />{" "}
                    <span className="theme-color">King Hotel</span>
                  </h2>
                  <div className="text">
                    We Have Over 40 Payment Ways for Locking the Lowest Room
                    Rates. No Credit Card Needed! Read Reviews from Verified
                    Guests.
                  </div>
                  <div className="text-two">
                    Abundantly tree made. Days saw thing whales may, <br />{" "}
                    creeping after abundantly waters, fourth.
                  </div>
                  <div className="author-info">
                    <div className="image-author-thumb">
                      <img src="assets/images/resource/image-8.png" alt="" />
                    </div>
                    <div className="name">Alexis D. Dowson</div>
                    <div className="designation">Founder</div>
                  </div>
                  <div className="rating">
                    <h4>4.6</h4>
                    <div className="rating-icon">
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                      <span className="fas fa-star" />
                    </div>
                    <div className="image-rating">
                      <img src="assets/images/resource/image-14.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section fourteen */}
        <section className="section-fourteen">
          <div className="auto-container">
            <div className="image">
              <img src="assets/images/resource/image-13.png" alt="" />
            </div>
            <h2 className="sec-title">Core Features</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-wifi-signal" />
                  </div>
                  <h3>High Speed Wifi</h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-laundry" />
                  </div>
                  <h3>
                    Loundry <br /> Service
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-massage" />
                  </div>
                  <h3>
                    Spa &amp; <br /> Salon
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-game-controller" />
                  </div>
                  <h3>
                    Pool Party <br /> Anytime
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-weights" />
                  </div>
                  <h3>
                    Dinks &amp; <br /> Bar
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-croissant" />
                  </div>
                  <h3>
                    Restaurant <br /> Foods
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-conference-1" />
                  </div>
                  <h3>
                    Conference <br /> Room
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-fourteen">
                  <div className="icon">
                    <i className="flaticon-plane" />
                  </div>
                  <h3>
                    Transport <br /> Facilities
                  </h3>
                  <div className="icon-border" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section fifteen */}
        <section className="section-fifteen">
          <div className="auto-container">
            <div className="image text-center mb-10">
              <img src="assets/images/resource/image-13.png" alt="" />
            </div>
            <h2 className="sec-title text-center mb-10">Our Rooms</h2>
            <div className="text text-center">
              A business consulting company that can produce anything. Drive more{" "}
              <br />
              through digital . We are optimists who love to work together
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="block-fifteen">
                  <div className="ribbon">New</div>
                  <div className="image">
                    <img src="assets/images/resource/image-22.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="pricing">
                      $100<span>/Night</span>
                    </div>
                    <h4>Grand Delux Room</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="block-fifteen">
                  <div className="ribbon">New</div>
                  <div className="image">
                    <img src="assets/images/resource/image-23.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="pricing">
                      $100<span>/Night</span>
                    </div>
                    <h4>Grand Cozy Room</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="block-fifteen">
                  <div className="ribbon">New</div>
                  <div className="image">
                    <img src="assets/images/resource/image-24.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="pricing">
                      $100<span>/Night</span>
                    </div>
                    <h4>Grand Modern Room</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="block-fifteen">
                  <div className="ribbon">New</div>
                  <div className="image">
                    <img src="assets/images/resource/image-25.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="pricing">
                      $100<span>/Night</span>
                    </div>
                    <h4>Grand Family Suit</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block-fifteen">
                  <div className="ribbon">New</div>
                  <div className="image">
                    <img src="assets/images/resource/image-26.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="pricing">
                      $100<span>/Night</span>
                    </div>
                    <h4>Grand Luxuary Room</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section sixteen */}
        <section className="section-sixteen">
          <div className="auto-container">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="block-sixteen">
                  <div className="offer-title">Parlour &amp; Salon</div>
                  <h4>Spa &amp; Massage</h4>
                  <div className="text">
                    Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                    <br />
                    Here. Web, Images &amp; Video. Information 24/7.
                  </div>
                  <div className="icon">
                    <i className="flaticon-clock" />
                    <span>Open Daily: 7:00am - 03:00am</span>
                  </div>
                  <div className="icon-two">
                    <i className="flaticon-calendar" />
                    <span>Sunday: Off day</span>
                  </div>
                  <Link href="/contact">
                    <a className="theme-btn btn-style-one">
                      <span>Get Appointment</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/resource/image-14.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2">
                <div className="block-sixteen">
                  <div className="offer-title">Eat &amp; Drinks</div>
                  <h4>Restaurant &amp; Bar</h4>
                  <div className="text">
                    Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                    <br />
                    Here. Web, Images &amp; Video. Information 24/7.
                  </div>
                  <div className="icon">
                    <i className="flaticon-clock" />
                    <span>Open Daily: 7:00am - 03:00am</span>
                  </div>
                  <div className="icon-two">
                    <i className="flaticon-calendar" />
                    <span>Sunday: Off day</span>
                  </div>
                  <Link href="/contact">
                    <a className="theme-btn btn-style-one">
                      <span>Get Appointment</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/resource/image-70.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section seventeen */}
        <section className="section-seventeen">
          <h4 className="d-none">heading</h4>
          <div className="auto-container">
            <div
              className="bg"
              style={{
                backgroundImage: "url(assets/images/resource/image-16.jpg)",
              }}
            >
              <div className="block-seventeen">
                <div className="icon">
                  <img src="assets/images/icons/icon-3.png" alt="" />
                </div>
                <div className="contact-text">
                  Contact us now!<a href="wa.me/6282335117847"><span>082335117847</span></a>
                </div>
                <div className="text">
                  Get Support anytime thats mean 24/7 our stuff is ready for you.
                </div>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <span>Get Appointment</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* section eightteen */}
        <section className="section-eighteen">
          <div className="auto-container">
            <div className="icon text-center">
              <img src="assets/images/resource/image-13.png" alt="" />
            </div>
            <h2 className="sec-title text-center mb-10">User Feedback</h2>
            <div className="text text-center mb-100">
              A business consulting company that can produce anything. Drive more{" "}
              <br />
              through digital . We are optimists who love to work together
            </div>
            <Swiper
              {...feedBackSlider}
              className="theme_carousel swiper-container py-50 ps-5"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="slide-item">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                      <div className="block-18">
                        <div className="testimonial-image">
                          <img src="assets/images/resource/image-17.jpg" alt="" />
                        </div>
                        <div className="reating">
                          <ul>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="block-19">
                        <div className="icon-two">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="text">
                          “ A testimonial is a statement from a past of this
                          customer that describes how a product or service helped
                          them. Testimonials are often written by the business
                          based on specific ”
                        </div>
                        <div className="name">Alexis D. Dowson</div>
                        <div className="designation">Founder Of Alexis Co.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                      <div className="block-18">
                        <div className="testimonial-image">
                          <img src="assets/images/resource/image-17.jpg" alt="" />
                        </div>
                        <div className="reating">
                          <ul>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="block-19">
                        <div className="icon-two">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="text">
                          “ A testimonial is a statement from a past of this
                          customer that describes how a product or service helped
                          them. Testimonials are often written by the business
                          based on specific ”
                        </div>
                        <div className="name">Alexis D. Dowson</div>
                        <div className="designation">Founder Of Alexis Co.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                      <div className="block-18">
                        <div className="testimonial-image">
                          <img src="assets/images/resource/image-17.jpg" alt="" />
                        </div>
                        <div className="reating">
                          <ul>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="block-19">
                        <div className="icon-two">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="text">
                          “ A testimonial is a statement from a past of this
                          customer that describes how a product or service helped
                          them. Testimonials are often written by the business
                          based on specific ”
                        </div>
                        <div className="name">Alexis D. Dowson</div>
                        <div className="designation">Founder Of Alexis Co.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                      <div className="block-18">
                        <div className="testimonial-image">
                          <img src="assets/images/resource/image-17.jpg" alt="" />
                        </div>
                        <div className="reating">
                          <ul>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="block-19">
                        <div className="icon-two">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-quote" />
                        </div>
                        <div className="text">
                          “ A testimonial is a statement from a past of this
                          customer that describes how a product or service helped
                          them. Testimonials are often written by the business
                          based on specific ”
                        </div>
                        <div className="name">Alexis D. Dowson</div>
                        <div className="designation">Founder Of Alexis Co.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </section>
        {/* section nineteen */}
        <section
          className="section-nineteen"
          style={{
            backgroundImage: "url(assets/images/resource/image-18.jpg)",
          }}
        >
          <h4 className="d-none">heading</h4>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="block-nineteen">
                  <div className="funfact-border" />
                  <div className="count-outer count-box">
                    <p>Standart Room</p>
                    {/* jumlah data standart room */}
                    <Counter end={60} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-nineteen">
                  <div className="funfact-border" />
                  <div className="count-outer count-box">
                    <p>Delux Room</p>
                    <Counter end={60} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-nineteen">
                  <div className="funfact-border" />
                  <div className="count-outer count-box">
                    <p>Luxury Room</p>
                    <Counter end={150} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="block-nineteen">
                  <div className="funfact-border" />
                  <div className="count-outer count-box">
                    <p>President Suite</p>
                    <Counter end={97} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section twenty */}
        <section className="section-twenty">
          <h4 className="d-none">heading</h4>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="icon">
                  <img src="assets/images/resource/image-13.png" alt="" />
                </div>
                <div className="sec-title mb-10">Get Answers</div>
                <div className="text">
                  A business consulting company that can produce anything. Drive
                  more <br />
                  through digital . We are optimists who love to work together
                </div>
                <Accordion
                  as={"ul"}
                  className="accordion-box"
                  defaultActiveKey="acc-1"
                >
                  {/*Accordion Block*/}
                  <li className={`accordion block ${this.state.activeLi("acc-1")}`}>
                    <Accordion.Toggle
                      as={"div"}
                      eventKey="acc-1"
                      className={`acc-btn ${activebtn(`acc-1`)}`}
                      onClick={() => setAcc("acc-1")}
                    >
                      <div className="icon-outer">
                        <span className="fal fa-plus" />
                      </div>
                      How do I become an author?
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="acc-1"
                      // className={`acc-content `}
                      // style={activeContent("acc-1")}
                    >
                      <div className="content">
                        <div className="text">
                          Content marketing is more than a buzzword. {`It's`} an
                          important part <br />
                          of your {`hotel's`} marketing strategy. Simply put,{" "}
                          {`It's`} the creation and <br />
                          distribution of valuable assets, such as videos, blog
                          posts, and <br />
                          e-newsletters, as marketing tools.
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  {/*Accordion Block*/}
                  <li className={`accordion block ${activeLi("acc-2")}`}>
                    <Accordion.Toggle
                      as={"div"}
                      eventKey="acc-2"
                      className={`acc-btn ${activebtn(`acc-2`)}`}
                      onClick={() => setAcc("acc-2")}
                    >
                      <div className="icon-outer">
                        <span className="fal fa-plus" />
                      </div>
                      The Story of Behind Our Resort
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc-2">
                      <div className="content">
                        <div className="text">
                          Content marketing is more than a buzzword. {`It's`} an
                          important part <br />
                          of your {`hotel's`} marketing strategy. Simply put,{" "}
                          {`It's`} the creation and <br />
                          distribution of valuable assets, such as videos, blog
                          posts, and <br />
                          e-newsletters, as marketing tools.
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  {/*Accordion Block*/}
                  <li className={`accordion block ${activeLi("acc-3")}`}>
                    <Accordion.Toggle
                      as={"div"}
                      eventKey="acc-3"
                      className={`acc-btn ${activebtn(`acc-3`)}`}
                      onClick={() => setAcc("acc-3")}
                    >
                      <div className="icon-outer">
                        <span className="fal fa-plus" />
                      </div>
                      Change Restaurant into Hotel
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc-3">
                      <div className="content">
                        <div className="text">
                          Content marketing is more than a buzzword. {`It's`} an
                          important part <br />
                          of your {`hotel's`} marketing strategy. Simply put,{" "}
                          {`It's`} the creation and <br />
                          distribution of valuable assets, such as videos, blog
                          posts, and <br />
                          e-newsletters, as marketing tools.
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/resource/image-19.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    );
  
  }
};
export default Index;
