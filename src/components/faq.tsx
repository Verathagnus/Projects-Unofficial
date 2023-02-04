import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'

const Faq = () => {
  const Variants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 120, scale: 1, opacity: 0 },
  };

  const Variants2 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: -120, y: 0, scale:0, opacity: 0 },
  };
  function Heading() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.h2
        className="mb-6 text-3xl font-semibold text-center md:text-4xl"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
       Frequently Asked Questions
      </motion.h2>
    );
  }

  function P1(){
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.p
        className="max-w-lg px-6 mx-auto text-center text-grayishBlue"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
         Here are some of our FAQs. If you have any other questions you'd
            like answer please feel free to email us
      </motion.p>
    );
  }

  function FAQSection(){
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="container mx-auto px-6 mb-32"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants2}
      >
        
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
        
      </motion.div>
    );

    

  }
  return (
    <>
         <section id="faq">
        <div className="container mx-auto mt-20 ">
         <Heading/>
         <P1/>
        </div>
      </section>
      <section id="faq-accordion">
        {/* Main Container */}

        <FAQSection/>
        
      </section>
    </>
  )
}

export default Faq