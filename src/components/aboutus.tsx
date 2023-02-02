import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const Variants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 120, scale: 1, opacity: 0 },
  };
  const Variants2  = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 ,delay: 0.1} },
    hidden: { x: 0, y: 120, scale: 1, opacity: 0 },
  }

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
        className="mb-6 text-4xl font-semibold text-center"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
       About Us
      </motion.h2>
    );
  }

  function P1(){
    const controls = useAnimation();
    const [refHeading2, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.p
        className="max-w-md mx-auto text-center text-grayishBlue"
        ref={refHeading2}
        initial="hidden"
        animate={controls}
        variants={Variants2}
      >
         Our Aim to build websites at a fast pace and at an affordable price ,
          maintaining quality and performance of the web sites that we build .
      </motion.p>
    );

  }
  return (
    <section id="aboutus">
      <div className=" mx-auto mt-16 px-6 md:mx-0">
        {/* <h2 className="mb-6 text-4xl font-semibold text-center">About Us</h2> */}
        <Heading/>
        <P1/>
        {/* <p className="max-w-md mx-auto text-center text-grayishBlue">
          Our Aim to build websites at a fast pace and at an affordable price ,
          maintaining quality and performance of the web sites that we build .
          Our websites are designed according to the needs of the customers.
        </p> */}
      </div>
    </section>
  );
};

export default AboutUs;
