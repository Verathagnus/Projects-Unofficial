import React, { useState, useEffect } from "react";
import FormInput from "./shared/forminput/forminput";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const NewsLetter = () => {
  const newsVariants = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 0, scale: 0, opacity: 0 },
  };
  const [email, setEmail] = useState("");
  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  function NewsBody() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="max-w-lg mx-auto py-24 mt-20"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={newsVariants}
      >
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
            className="newsletter flex flex-row justify-between items-center
              mx-auto md:flex-row md:mx-0"
          >
            <FormInput
              label="Enter Email"
              inputOptions={{
                name: "email",
                value: email,
                type: "email",
                onChange: handleChange,
              }}
            />
            {/* <input
                type="text"
                className=" flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1
                 border-white focus:outline-none md:mr-3 md:mb-0"
                
              /> */}
            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
            />
          </div>
        </form>
      </motion.div>
    );
  }

  return (
    <section id="newsletter" className="bg-cover bg-softBlue bg-newsLetterBg bg-fixed">
      {/* <div className="max-w-lg mx-auto py-24 mt-20">
        <p
          className="mb-6 text-lg tracking-widest text-center
          text-white uppercase
          "
        >
          35,000 + Already Joined
        </p>
      </div> */}
      <NewsBody />
    </section>
  );
};

export default NewsLetter;
