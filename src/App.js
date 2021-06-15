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
                A big Demo Pice Of Text Just For The Sake Of Visual Purpouse!! A
                big Demo Pice Of Text Just For The Sake Of Visual Purpouse!! A
                big Demo Pice Of Text Just For The Sake Of Visual Purpouse!! A
                big Demo Pice Of Text Just For The Sake Of Visual Purpouse!!
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div>
            <h1>Our Services</h1>
            <span
              className={serviceView == 1 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
                setService(1);
              }}
            >
              Mobile Development
            </span>
            <span
              className={serviceView == 2 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
                setService(2);
              }}
            >
              Website Development
            </span>
            <span
              className={serviceView == 3 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
                setService(3);
              }}
            >
              Web / Mobile App Design
            </span>
            <span
              className={serviceView == 4 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
                setService(4);
              }}
            >
              Graphic Designing
            </span>
            <span
              className={serviceView == 5 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
                setService(5);
              }}
            >
              Trending Technology
            </span>
            <span
              className={serviceView == 6 ? "servicesLinkActive" : ""}
              onMouseOver={() => {
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
                  return (
                    <>
                      <a href="">One</a>
                    </>
                  );
                  break;

                case 2:
                  return (
                    <>
                      <a href="">One</a>
                      <a href="">Two</a>
                    </>
                  );
                  break;

                case 3:
                  return (
                    <>
                      <a href="">One</a>
                      <a href="">Two</a>
                      <a href="">Three</a>
                    </>
                  );
                  break;

                case 4:
                  return (
                    <>
                      <a href="">One</a>
                      <a href="">Two</a>
                      <a href="">Three</a>
                      <a href="">Four</a>
                    </>
                  );
                  break;

                case 5:
                  return (
                    <>
                      <a href="">One</a>
                      <a href="">Two</a>
                      <a href="">Three</a>
                      <a href="">Four</a>
                      <a href="">Five</a>
                    </>
                  );
                  break;

                case 6:
                  return (
                    <>
                      <a href="">One</a>
                      <a href="">Two</a>
                      <a href="">Three</a>
                      <a href="">Four</a>
                      <a href="">Five</a>
                      <a href="">Six</a>
                    </>
                  );
                  break;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
        <div className="section">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
