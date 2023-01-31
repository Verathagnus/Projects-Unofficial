import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Arrow from "./assets/icon-arrow.svg";
import { useAnimation,motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import Hero from './components/hero'
import AboutUs from './components/aboutus'
import Team from './components/ourteam'
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
      <nav className="container relative mx-auto p-6">
        {/* <!-- Flex container for nav items --> */}

        <div className="hidden md:flex items-center justify-between space-x-20 my-6">
          {/* <!-- logo --> */}
          <div className="z-30">
            <img src="src/assets/logo-bookmark.svg" alt="" id="logo" />
          </div>
          {/* <!-- Menu Items --> */}
          <div className=" items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="" className="tracking-widest hover:text-softRed">
              Home
            </a>
            <a href="" className="tracking-widest hover:text-softRed">
              About Us
            </a>
            <a href="" className="tracking-widest hover:text-softRed">
              Services
            </a>
            <a href="" className="tracking-widest hover:text-softRed">
              FAQ
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
          } w-full py-3 text-center flex justify-end`}
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
          <div className="w-full py-3 text-center">
            <a href="" className="block">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="" className="block">
              Download
            </a>
          </div>{" "}
          <div className="w-full py-3 text-center">
            <a href="" className="block">
              FAQ
            </a>
          </div>{" "}
          <div className="w-full py-3 text-center">
            <a href="" className="block">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* // Hero Section  */}
          
      <Hero/>
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
      <section id="faq">
        <div className="container mx-auto mt-10 ">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
            Here are some of our FAQs. If you have any other questions you'd
            like answer please feel free to email us
          </p>
        </div>
      </section>
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/* Accordion Container */}

          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              {/* Tab Flex Container  */}
              <div
                className="flex items-center justify-between py-3 text-gray-500 
            transition duration-500 cursor-pointer group ease
            "
              >
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div
                  className="transition duration-500 ease
              group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={2}>
              {/* Tab Flex Container  */}
              <div
                className="flex items-center justify-between py-3 text-gray-500 
            transition duration-500 cursor-pointer group ease
            "
              >
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div
                  className="transition duration-500 ease
              group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter Section */}
      <section id="newsletter" className="bg-softBlue">
        <div className="max-w-lg mx-auto py-24">
          <p
            className="mb-6 text-lg tracking-widest text-center
          text-white uppercase
          "
          >
            35,000 + Already Joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>
          {/* Form */}
          <form
            action=""
            className="flex flex-col items-start
           justify-center max-w-2xl mx-auto space-y-6 text-base
            px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
          >
            {/* Input & Button Container */}
            <div
              className="flex flex-col justify-between items-center
              mx-auto md:flex-row md:mx-0"
            >
              <input
                type="text"
                className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1
                 border-white focus:outline-none md:mr-3 md:mb-0"
              />
              <input
                type="submit"
                className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
              />
            </div>
          </form>
        </div>
      </section>

      <section id="footer" className="bg-veryDarkBlue">
        <div className="container flex flex-col items-center justify-between mx-auto  space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo Container */}
          <div
            className="flex flex-col items-center justify-between space-y-8 my-10 text-lg font-light md:flex-row md:space-y-0 md:space-x-14
          text-grayishBlue
          "
          >
            <img
              src="./src/assets/logo-bookmark-footer.svg"
              alt=""
              className="mb-1"
            />
            <a href="#features" className="uppercase hover:text-softRed"></a>
            <a href="#features" className="uppercase hover:text-softRed">
              Download{" "}
            </a>
            <a href="#features" className="uppercase hover:text-softRed">
              FAQ
            </a>
          </div>
          {/* Social Container  */}
          <div className="flex space-x-10">
            <a href="">
              <img
                src="./src/assets/icon-facebook.svg"
                alt=""
                className="h-6 ficon"
              />
            </a>
            <a href="">
              <img
                src="./src/assets/icon-twitter.svg"
                alt=""
                className="h-6 ficon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
