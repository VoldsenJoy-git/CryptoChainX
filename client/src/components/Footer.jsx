import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex flex-col items-center p-6 bg-gradient-to-r from-gray-900 via-black to-gray-800">
    <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center my-4">
      <div className="flex flex-shrink-0 justify-center sm:justify-start">
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="flex justify-evenly items-center w-full sm:mt-0 mt-5 space-x-6">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item) => (
          <p className="text-gray-300 text-lg cursor-pointer hover:underline">{item}</p>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center my-5">
      <p className="text-gray-300 text-center font-light">Join us and experience the unexpected!</p>
    </div>

    <div className="flex space-x-4 my-5">
      <a href="https://www.linkedin.com/in/joydeep-sen-455357222/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-gray-300 text-2xl cursor-pointer hover:text-white-500 transition duration-300" />
      </a>
      <a href="https://github.com/VoldsenJoy-git" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-300 text-2xl cursor-pointer hover:text-white-500 transition duration-300" />
      </a>
    </div>

    <div className="w-full h-[1px] bg-gray-600 my-6" />

    <div className="flex justify-between w-full max-w-6xl text-base text-gray-400">
      <p>@Joydeep Sen 2024</p>
      <p>All rights reserved</p>
    </div>
  </div>
);

export default Footer;
