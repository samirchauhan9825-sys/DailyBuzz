import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-2 mb-40">
        <div className="header-bottom header-sticky background-white text-center">
          <div className="scroll-progress gradient-bg-1" />
          <div className="mobile_menu d-lg-none d-block" />
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <div className="header-logo d-none d-lg-block">
                  <a href="index.html">
                    <img
                      className="logo-img d-inline"
                      src="assets/imgs/logo.svg"
                      alt
                    />
                  </a>
                </div>
                <div className="logo-tablet d-md-inline d-lg-none d-none">
                  <Link to={"index.html"}>
                    <img
                      className="logo-img d-inline"
                      src="assets/imgs/logo.svg"
                      alt
                    />
                  </Link>
                </div>
                <div className="logo-mobile d-block d-md-none">
                  <Link to={"index.html"}>
                    <img
                      className="logo-img d-inline"
                      src="assets/imgs/favicon.svg"
                      alt
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-9 main-header-navigation">
                {/* Main-menu */}
                <div className="main-nav text-left float-lg-left float-md-right">
                  <nav>
                    <ul className="main-menu d-none d-lg-inline">
                      <li>
                        <Link to={"/"}>
                          <span className="mr-15">
                            <ion-icon name="home-outline" />
                          </span>
                          Home
                        </Link>
                      </li>
                      <ul className="main-menu d-none d-lg-inline">
                        <li className="menu-item-has-children">
                          <a href="index.html">
                            <span className="fa fa-list-ul mr-15">
                              <ion-icon name="" />
                            </span>
                            Categories
                          </a>
                          <ul className="sub-menu text-muted font-small">
                            <li className="cat-item cat-item-3">
                              <Link to={""}>
                                Business
                              </Link>
                            </li>
                            <li className="cat-item cat-item-4">
                              <Link to={"/Newsbycategorie/crime"}>Crime</Link>
                            </li>
                            <li className="cat-item cat-item-5">
                              <Link to={"/Newsbycategorie/domestic"}>
                                Domestic
                              </Link>
                            </li>
                            <li className="cat-item cat-item-6">
                              <Link to={"/Newsbycategorie/education"}>
                                Education
                              </Link>
                            </li>
                            <li className="cat-item cat-item-7">
                              <Link to={"/Newsbycategorie/entertainment"}>
                                Entertainment
                              </Link>
                            </li>
                            <li className="cat-item cat-item-2">
                              <Link to={"/Newsbycategorie/environment"}>
                                Environment
                              </Link>
                            </li>
                            <li className="cat-item cat-item-2">
                              <Link to={"/Newsbycategorie/food"}>Food</Link>
                            </li>
                            <li className="cat-item cat-item-2">
                              <Link to={"/Newsbycategorie/health"}>Health</Link>
                            </li>
                            <li className="cat-item cat-item-2">
                              <Link to={"/Newsbycategorie/lifestyle"}>
                                Lifestyle
                              </Link>
                            </li>
                            <li className="cat-item cat-item-3">
                              <Link to={"/Newsbycategorie/other"}>Other</Link>
                            </li>
                            <li className="cat-item cat-item-4">
                              <Link to={"/Newsbycategorie/politics"}>
                                Politics
                              </Link>
                            </li>
                            <li className="cat-item cat-item-5">
                              <Link to={"/Newsbycategorie/science"}>
                                Science
                              </Link>
                            </li>
                            <li className="cat-item cat-item-6">
                              <Link to={"/Newsbycategorie/sports"}>Sports</Link>
                            </li>
                            <li className="cat-item cat-item-7">
                              <Link to={"/Newsbycategorie/technology"}>
                                Technology
                              </Link>
                            </li>
                            <li className="cat-item cat-item-2">
                              <Link to={"/Newsbycategorie/top"}>Top</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>

                    <li>
                        <Link to={"/sources"}>
                          <span className="fa fa-server mr-15">
                            <ion-icon name="" />
                          </span>
                          Sources
                        </Link>
                      </li>

                      <li>
                        <a href="/contact">
                          <span className="fa fa-phone mr-15">
                            <ion-icon name="" />
                          </span>
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="d-inline ml-50 tools-icon">
                      <a
                        className="red-tooltip text-danger"
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Hot Topics"
                      >
                        <ion-icon name="flame-outline" />
                      </a>
                      <a
                        className="red-tooltip text-primary"
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Trending"
                      >
                        <ion-icon name="flash-outline" />
                      </a>
                      <a
                        className="red-tooltip text-success"
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Notifications"
                      >
                        <ion-icon name="notifications-outline" />
                        <span className="notification bg-success">5</span>
                      </a>
                    </div>
                  </nav>
                </div>
                {/* Search */}
               
                {/* Off canvas */}
                <div className="off-canvas-toggle-cover">
                  <div
                    className="off-canvas-toggle hidden d-inline-block ml-15"
                    id="off-canvas-toggle"
                  >
                    <ion-icon name="grid-outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
