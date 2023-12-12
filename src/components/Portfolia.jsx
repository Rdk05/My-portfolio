import React from "react";
import box from "../assets/portfolia/box.png";
import ttt from "../assets/portfolia/ttt.png";
import pglife from "../assets/portfolia/pglife.png";
import lamp from "../assets/portfolia/lamp.png";
import ecom from "../assets/portfolia/ecom.png";
import guide from "../assets/portfolia/guide.png";



const Portfolio = () => {
  const portfolios = 
[
  {
    id:1,
    src:box,
    link:"https://github.com/Rdk05/Box-office-app"
  },
  {
    id:2,
    src:ttt,
    link:"https://github.com/Rdk05/tictactoe-game"
  },
  {
    id:3,
    src:pglife,
  },
  {
    id:4,
    src:lamp,
    link:"https://github.com/Rdk05/Lamp_project"
  },
  {
    id:5,
    src:ecom,
    link:"https://github.com/Rdk05/e_com"
  },
  {
    id:6,
    src:guide,
    link:"https://github.com/Rdk05/Country_Guide_App"
  },
]
  
return (
  <div
    name="portfolio"
    className="bg-gradient-to-b pt-12 from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-6 mt-12">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, link }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              
              <button className="text-2xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link} target="_blank" rel="noreferrer">Code</a></button>
                
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;