import React from "react";
import Hero from "../assets/hero1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full pt-12 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mt-6 mx-auto flex flex-col items-center justify-center h-full px-6 mb-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm <br/>a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 text-xl max-w-md">
           I love to work on web application using technologies like
            React, Tailwind, NodeJS and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Hero}
            alt="my profile"
            className="rounded-3xl mt-2 m-10 mx-auto w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;