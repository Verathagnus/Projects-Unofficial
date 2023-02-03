import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col items-center justify-center mx-auto  space-y-10 px-6 md:flex-row md:space-y-0">
        {/* Logo Container */}
        <div
          className="flex flex-col items-center font-sans justify-between  my-5 text-lg font-light md:items-center  md:space-y-0 md:space-x-14
      text-grayishBlue
      "
        >
          <div>© 2022 Copyright Project Unofficial.</div>
          <div className="w-full">All Rights Reserved . Designed by Project Unofficial</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
