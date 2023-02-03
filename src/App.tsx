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

        <div className="hidden md:flex items-center justify-between space-x-20 my-6">
          {/* <!-- logo --> */}
          <div className="z-30">
            <img src="src/assets/logo-bookmark.svg" alt="" id="logo" />
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
      {/* Features Tab */}
      <section id="tabs">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* <!-- Tab 1 --> */}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-1"
            >
              <div className="py-5 active" data-target="panel-1">
                Simple Bookmarking
              </div>
            </div>

            {/* <!-- Tab 2 --> */}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-2"
            >
              <div className="py-5" data-target="panel-2">
                Speedy Searching
              </div>
            </div>

            {/* <!-- Tab 3 --> */}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-3"
            >
              <div className="py-5" data-target="panel-3">
                Easy Sharing
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1  */}
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="src/assets/illustration-features-tab-1.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* Panel Content  */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in One Click
                </h3>
                <p className="max-w-md tracking-widest text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto">
                  <a
                    href=""
                    className="px-6 py-3 mt-4 font-semibold text-white
                border-2 border-white rounded-lg md:inline-flex 
                bg-softBlue hover:bg-white hover:text-softBlue 
                hover:border-2 hover:border-softBlue
                "
                  >
                    {" "}
                    More Info
                  </a>
                </div>
              </div>
            </div>
            {/* Panel 2  */}
            <div className="flex hidden flex-col py-5 md:flex-row md:space-x-7 panel panel-2">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="src/assets/illustration-features-tab-2.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* Panel Content  */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent Search
                </h3>
                <p className="max-w-md tracking-widest text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto">
                  <a
                    href=""
                    className="px-6 py-3 mt-4 font-semibold text-white
                border-2 border-white rounded-lg md:inline-flex 
                bg-softBlue hover:bg-white hover:text-softBlue 
                hover:border-2 hover:border-softBlue
                "
                  >
                    {" "}
                    More Info
                  </a>
                </div>
              </div>
            </div>
            {/* Panel 3 */}
            <div className="flex hidden flex-col py-5 md:flex-row md:space-x-7 panel panel-3">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="src/assets/illustration-features-tab-3.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* Panel Content  */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md tracking-widest text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto">
                  <a
                    href=""
                    className="px-6 py-3 mt-4 font-semibold text-white
                border-2 border-white rounded-lg md:inline-flex 
                bg-softBlue hover:bg-white hover:text-softBlue 
                hover:border-2 hover:border-softBlue
                "
                  >
                    {" "}
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
