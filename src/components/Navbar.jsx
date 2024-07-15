import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo.png";
import menuIcon from "../assets/img/menu-icon.svg"
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="navbar-z"       ref={navbarRef} >
      <header className={`fixed w-full top-0 left-0 right-0 navbar-z ${ scrollPosition > 100 ? ' bg-black-2 opacity-80 text-white' : 'bg-transparent '}` }>
        <nav className=" justify-between items-center px-4 xl:px-24 py-4 flex navbar-z">
          <Link to={""} className="text-white">
            <img src={logo} alt="" width={100} height={100} />
          </Link>
          <ul className=" justify-center items-center hidden lg:flex navbar-z ">
            {navLinks.map((item) => {
              console.log(item.url," = ",location.pathname)
              const isActive = item.url == location.pathname
              return (
                <li>
                  <Link
                    to={item.url}
                    className={`text-white font-semibold hover:border-b hover:border-primary rounded-xl px-4 py-1 ${isActive?"border-b-2 border-primary":""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <a
                href=""
                className="text-white text-2xl bg-primary rounded-full px-4 py-2 font-raleway"
              >
                Register
              </a>
            </li>
          </ul>
          <img src={menuIcon} alt="" className="block lg:hidden text-white w-[40px] h-[40px]" />

          {/* <div>
                <h1 className="text-white">social icons</h1>
            </div> */}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
