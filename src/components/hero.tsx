import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const hero = () => {
  // from left to right
  const heroVariants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: -120, y: 0, scale: 1, opacity: 0 },
  };

  const heroVariants2 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 120, y: 0, scale: 1, opacity: 0 },
  };

  const heroVariants3 = {
    visible: {  scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { scale: 0, opacity: 0 },
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
      <motion.h1
        className="text-3xl font-semibold text-center text-white lg:text-5xl lg:text-left"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={heroVariants1}
      >
        PROJECTS UNOFFICIAL
      </motion.h1>
    );
  }

  function P1() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.p
        className="max-w-md mx-auto text-lg text-center text-white
    lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={heroVariants1}
      >
        An enthusiastic web application products team building products for clients at a affordable price with great features and support.
        
      </motion.p>
    );
  }

  function SideImage() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={heroVariants2}
      >
        <div className="bg-hero"></div>
        <img
          src="src/assets/illustration-hero.svg"
          alt=""
          className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
        />
      </motion.div>
    );
  }

  function ContactUs() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="flex items-center justify-center w-full space-x-4 lg:justify-start"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={heroVariants3}
      >
        <a
          href=" "
          className="p-4 text-sm font-semobold text-white bg-softBlue
            rounded shadow-md font-bold border-[1px] border-softBlue md:text-base hover:bg-white hover:text-softBlue
            "
        >
          {" "}
          Contact Us
        </a>
      </motion.div>
    );
  }

  return (
    <section id="hero">
      <div
        className="container flex flex-col-reverse mx-auto p-6 
    lg:mb-0
    lg:flex-row
    
    "
      >
        {/* Content */}
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          {/* <h1 className="text-3xl font-semibold text-center lg:text-5xl lg:text-left">
            PROJECTS UNOFFICIAL
          </h1> */}
          <Heading />
          <P1 />
          {/* Buttons Container  */}

          <ContactUs/>
          {/* <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <a
              href=" "
              className="p-4 text-sm font-semobold text-white bg-softBlue
            rounded shadow-md font-bold border-[1px] border-softBlue md:text-base hover:bg-white hover:text-softBlue
            "
            >
              {" "}
              Contact Us
            </a>
            <a
              href=" "
              className="p-4 text-sm font-semobold text-black bg-gray-300
            rounded shadow-md font-bold border-[1px] border-gray-300 md:text-base
             hover:bg-white hover:text-gray-600
            "
            >
              {" "}
              Get It on FireFox
            </a>
          </div> */}
        </div>
        {/* Image */}
        <SideImage />
        {/* <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src="src/assets/illustration-hero.svg"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div> */}
      </div>
    </section>
  );
};

export default hero;
