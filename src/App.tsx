import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Arrow from "./assets/icon-arrow.svg";
import { useAnimation,motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import Hero from './components/hero'
import AboutUs from './components/aboutus'
import Team from './components/ourteam'
import NewsLetter from "./components/newsletter";
import Faq from './components/faq'
import Projects from './components/projects'
import Contact from './components/Contact/contact'
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    // Tabs menu event listener
    const onTabClick = (Selectedtab: any) => {
      // console.log('tab clicked ')
      // console.log(Selectedtab)
      tabs.forEach((tab) => {
        tab.children[0].classList.remove("active");
      });
      Selectedtab.children[0].classList.add("active");
      // Selectedtab.classList.add('active')
      // console.log('tab clicked: '+ idx)
      const classString = Selectedtab.getAttribute("data-target");
      panels.forEach((panel) => {
        if (panel.classList.contains(classString)) {
          panel.classList.remove("hidden");
        } else panel.classList.add("hidden");
      });
    };
    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => onTabClick(tab));
    });
  }, []);

  const toggleHam = (e: any) => {
    e.preventDefault();
    if (open == false) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
    }
    setOpen(!open);
  };

  return (
    <>
      <nav className="container relative mx-auto px-1">
        {/* <!-- Flex container for nav items --> */}

        <div className="hidden font-serif text-bold md:flex items-center justify-between space-x-20 my-6">
          {/* <!-- logo --> */}
          <div className="z-30">
            <h2 className="text-3xl font-bold text-softBlue uppercase"> project unofficial</h2>
          </div>
          {/* <!-- Menu Items --> */}
          <div className=" items-center space-x-4 uppercase text-grayishBlue md:flex">
            <a href="" className="tracking-tight hover:text-softRed">
              Home
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              About Us
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              Services
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              Projects
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              FAQ
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              newsletter
            </a>
            <a href="" className="tracking-tight hover:text-softRed">
              contact us
            </a>
            {/* <a
              href=""
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed
          rounded-lg shadow-md hover:text-softRed hover:bg-white
          "
            >
              Login
            </a> */}
          </div>
        </div>

        <div
          className={`${
            open ? "hidden" : ""
          } md:hidden w-full py-3 text-center flex justify-end`}
        >
          <a href="" className="block">
            <button
              id="menu-btn"
              className="  z-30 block md:hidden focus:outline-none hamburger"
              onClick={(e) => toggleHam(e)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </a>
        </div>

        {/* Mobile Menu */}

        <div
          id="menu"
          className={`${
            open ? "" : "hidden"
          } fixed inset-0 z-20  flex flex-col items-center self-end
        w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase
        divide-y divide-gray-500 opacity-90 bg-veryDarkBlue
        
        `}
        >
          <div className="w-full py-3 text-center flex justify-end">
            <a href="" className="block">
              <button
                id="menu-btn"
                className="  z-30 block md:hidden focus:outline-none hamburger"
                onClick={toggleHam}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </a>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              About us
            </a>
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              Services
            </a>
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500 hover:shadow-blue-500 hover:shadow-">
            <a href="" className="block">
              Projects
            </a>
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              FAQ
            </a>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              NewsLetter
            </a>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">
            <a href="" className="block">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* // Hero Section  */}

      
      <div className="w-full bg-heroBg bg-cover bg-no-repeat ">
      <Hero/>

      </div>
        
      <AboutUs/>
      
      <Team/>

      {/* FAQ */}
     <Faq/>

     {/* Projects  */}
     <Projects/>

      {/* NewsLetter Section */}
      
        <NewsLetter/>
     {/* Contact */}

     <div className="w-full ">
     <Contact/>

     </div>

     {/* Footer */}
     <Footer/>
    </>
  );
}

export default App;
