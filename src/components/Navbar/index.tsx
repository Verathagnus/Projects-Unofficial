import React ,{useState} from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrollReached , setScrollReached] = useState(false)
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
    function check(){
        if(window.scrollY >= 600){
            setScrollReached(true);
        }
        else setScrollReached(false)
    }
    window.addEventListener('scroll',check)
  return (
    <nav className={`fixed  transition-all duration-300 ease-linear z-20 ${scrollReached?'bg-veryDarkBlue':'bg-white'} w-full mx-auto px-1`}>
        {/* <!-- Flex container for nav items --> */}

        <div className="hidden md:flex items-center justify-around space-x-20 my-6">
          {/* <!-- logo --> */}
          <div className="z-30">
            <img src="luitmania-logo.png" alt="" id="logo" className="w-[200px] " />
          </div>
          {/* <!-- Menu Items --> */}
          <div className={`items-center space-x-4 uppercase ${scrollReached?'text-white':'text-grayishBlue'} md:flex`}>
            <Link to="hero" smooth={true} offset={0} className="tracking-tight hover:text-softRed">
              Home
            </Link>
            <Link to="aboutus" smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              About us 
            </Link>
            <Link to="services" smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              Services
            </Link>
            <Link to="projects" smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              Projects
            </Link>
            <Link to="faq" smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              FAQ 
            </Link>
       
           
            <Link to="newsletter" smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              NewsLetter
            </Link>
            <Link to="contactus" smooth={true} offset={-80} className="tracking-tight hover:text-softRed">
              Contact Us
            </Link>
           
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
          <Link to="hero"    onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
             Home
          </Link>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">
          <Link to="aboutus"    onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
              About Us
          </Link>
           
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500">
          <Link to="services"   onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
              Services
          </Link>
            
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500 hover:shadow-blue-500 hover:shadow-">
          <Link to="projects"   onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
              Projects
          </Link>
            
          </div>{" "}
          <div className="w-full py-3 text-center hover:text-blue-500">
          <Link to="faq"   onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed block" >
              
              Contact Us
          </Link>
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500">

          <Link to="newsletter"   onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
              NewsLetter
          </Link>
            
          </div>
          <div className="w-full py-3 text-center hover:text-blue-500" >
          <Link to="contactus"   onClick ={(e:any)=>toggleHam(e)} smooth={true} offset={-120} className="tracking-tight hover:text-softRed">
              
              Contact Us
          </Link>
          
          </div>
        </div>
      </nav>
    
  )
}

export default Navbar