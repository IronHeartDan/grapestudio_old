import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Drawer from "./Drawer";
import logo from "./logo.svg";
import svg1 from "./svg1.svg";
import svg2 from "./svg2.svg";
import svg3 from "./svg4.svg";

import Header from "./Header";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Close from "@material-ui/icons/Close";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [drawerState, setDrawer] = useState(false);
  const [scrollTopState, setScrollTop] = useState(false);
  const [carsouelView, setCarsouel] = useState(1);
  const [serviceView, setService] = useState(1);

  useEffect(() => {
    console.log("Called");
    var i = 1;
    setInterval(() => {
      if (i <= 2) {
        i = i + 1;
        setCarsouel(i);
      } else {
        i = 1;
        setCarsouel(i);
      }
    }, 5000);
  }, []);

  const openDrawer = () => {
    setDrawer(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    document.body.style.overflow = "scroll";
    setDrawer(false);
  };

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="app">
      <Router>
        <div
          class="overlay"
          style={{
            display: drawerState ? "block" : "none",
            opacity: drawerState ? 1 : 0,
          }}
        >
          <Button onClick={(e) => closeDrawer()}>
            <Close />
          </Button>
        </div>
        <div
          className="scrollTop"
          style={{ transform: scrollTopState ? "scale(1)" : "scale(0)" }}
        >
          <Button onClick={scrollToTop}>
            <ArrowUpwardIcon />
          </Button>
        </div>
        <Header
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          state={drawerState}
        />
        <Drawer state={drawerState} />
        <Switch>
          <Route path="/services">
            <div className="service_con">
              <div>
                <div>
                  <div>
                    <h1>Demo Servie Text Shown</h1>
                    <ul>
                      <li>One</li>
                      <li>Two</li>
                      <li>Three</li>
                      <li>Four</li>
                      <li>FIve</li>
                      <li>Six</li>
                    </ul>
                  </div>
                  <Button>Let's Get Started!</Button>
                </div>
                <div>
                  <img src={svg1} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <h1>Demo Servie Text Shown</h1>
                    <ul>
                      <li>One</li>
                      <li>Two</li>
                      <li>Three</li>
                      <li>Four</li>
                      <li>FIve</li>
                      <li>Six</li>
                    </ul>
                  </div>
                  <Button>Let's Get Started!</Button>
                </div>
                <div>
                  <img src={svg1} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <h1>Our Services</h1>
                  <span
                    className={serviceView == 1 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(1);
                    }}
                  >
                    Mobile Development
                  </span>
                  <span
                    className={serviceView == 2 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(2);
                    }}
                  >
                    Website Development
                  </span>
                  <span
                    className={serviceView == 3 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(3);
                    }}
                  >
                    Web / Mobile App Design
                  </span>
                  <span
                    className={serviceView == 4 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(4);
                    }}
                  >
                    Graphic Designing
                  </span>
                  <span
                    className={serviceView == 5 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(5);
                    }}
                  >
                    Trending Technology
                  </span>
                  <span
                    className={serviceView == 6 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(6);
                    }}
                  >
                    Others
                  </span>
                </div>
                <div>
                  {(() => {
                    switch (serviceView) {
                      case 1:
                        return <Link to="/services">One</Link>;
                        break;

                      case 2:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                          </>
                        );
                        break;

                      case 3:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                          </>
                        );
                        break;

                      case 4:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                          </>
                        );
                        break;

                      case 5:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                            <Link to="/services">Fve</Link>
                          </>
                        );
                        break;

                      case 6:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                            <Link to="/services">Fve</Link>
                            <Link to="/services">Six</Link>
                          </>
                        );
                        break;
                      default:
                        return null;
                    }
                  })()}
                </div>
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="mainCon">
              <div className="section">
                <div className="carsouel" id="carsouel">
                  <img
                    src={svg1}
                    alt=""
                    style={{ opacity: carsouelView == 1 ? 1 : 0 }}
                  />
                  <img
                    src={svg2}
                    alt=""
                    style={{ opacity: carsouelView == 2 ? 1 : 0 }}
                  />
                  <img
                    src={svg3}
                    alt=""
                    style={{ opacity: carsouelView == 3 ? 1 : 0 }}
                  />
                </div>
                <div className="layerContent">
                  <div>
                    <h1>Demo Text</h1>
                    <p>
                      A big Demo Pice Of Text Just For The Sake Of Visual
                      Purpouse!! A big Demo Pice Of Text Just For The Sake Of
                      Visual Purpouse!! A big Demo Pice Of Text Just For The
                      Sake Of Visual Purpouse!! A big Demo Pice Of Text Just For
                      The Sake Of Visual Purpouse!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="section">
                <div>
                  <h1>Our Services</h1>
                  <span
                    className={serviceView == 1 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(1);
                    }}
                  >
                    Mobile Development
                  </span>
                  <span
                    className={serviceView == 2 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(2);
                    }}
                  >
                    Website Development
                  </span>
                  <span
                    className={serviceView == 3 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(3);
                    }}
                  >
                    Web / Mobile App Design
                  </span>
                  <span
                    className={serviceView == 4 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(4);
                    }}
                  >
                    Graphic Designing
                  </span>
                  <span
                    className={serviceView == 5 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(5);
                    }}
                  >
                    Trending Technology
                  </span>
                  <span
                    className={serviceView == 6 ? "servicesLinkActive" : ""}
                    onClick={() => {
                      setService(6);
                    }}
                  >
                    Others
                  </span>
                </div>
                <div>
                  {(() => {
                    switch (serviceView) {
                      case 1:
                        return <Link to="/services">One</Link>;
                        break;

                      case 2:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                          </>
                        );
                        break;

                      case 3:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                          </>
                        );
                        break;

                      case 4:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                          </>
                        );
                        break;

                      case 5:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                            <Link to="/services">Fve</Link>
                          </>
                        );
                        break;

                      case 6:
                        return (
                          <>
                            <Link to="/services">One</Link>
                            <Link to="/services">Two</Link>
                            <Link to="/services">Three</Link>
                            <Link to="/services">Four</Link>
                            <Link to="/services">Fve</Link>
                            <Link to="/services">Six</Link>
                          </>
                        );
                        break;
                      default:
                        return null;
                    }
                  })()}
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
