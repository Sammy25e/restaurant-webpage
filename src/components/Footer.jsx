import Footerlogo from "../../src/assets/assets/food-logo.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto w-full  px-20 md:px-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 py-5">
          <div>
            <div className="flex gap-5">
              <img
                src={Footerlogo}
                alt=""
                className="w-10 h-auto -mt-1 object-cover"
              />
              <h2>FOODIE</h2>
            </div>
            <div>
              <p>
                {" "}
                lorem ipsum dolor sit amet consectetur. lorem ipsum dolor sit
                amet consectetur adipiscicing elit. possimus,voluptates.
              </p>
            </div>
            <div className="flex mt-7 gap-5">
              <FaLocationArrow />
              <p className="-m-1">Noida, Uttar pradesh</p>
            </div>
            <div className="flex gap-5 mt-5">
              <FaMobileAlt />
              <p className="-mt-1">
                {" "}
                <a href="">08132979853</a>
              </p>
            </div>
            <div className="    mt-5 flex gap-5">
              <FaInstagram className=" text-3xl" />
              <FaFacebook className="text-3xl" />
              <FaLinkedin className="text-3xl" />
            </div>
          </div>
          <div className="-mt-2">
            <div>
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3 ">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
              </ul>
            </div>
          </div>

          <div className="-mt-2">
            <div>
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3 ">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
              </ul>
            </div>
          </div>

          <div className="-mt-2.5">
            <div>
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                Important Links
              </h1>

              <ul className="flex flex-col gap-3 ">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" text-center py-10 border-t-2 border-gray-300/50 mt-10">
            @copyright  2024 All rights reserved made with love by Samuel
        </div>
      </div>
    </div>
  );
};

export default Footer;
