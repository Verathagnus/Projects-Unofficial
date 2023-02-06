import React ,{useState} from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
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
    <nav className="container relative mx-auto px-1">
        {/* <!-- Flex container for nav items --> */}

        <div className="hidden md:flex items-center justify-between space-x-20 my-6">
          {/* <!-- logo --> */}
          <div className="z-30">
            <img src="/assets/luitmania-logo.png" alt="" id="logo" className="w-[200px] " />
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
    
  )
}

export default Navbar