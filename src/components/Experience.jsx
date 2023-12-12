import React from "react";

import html from "../assets/html.jpeg";
import css from "../assets/CSS.jpeg";
import javascript from "../assets/JS.png";
import bootstrap from "../assets/bootstrap.jpg";
import tailwind from "../assets/tailwind.jpeg";
import react from "../assets/react.jpeg";
import node from "../assets/Node.png";
import jquery from "../assets/jquery.jpeg"
import express from "../assets/expressjs.png";
import mongo from "../assets/mongo.jpeg";
import github from "../assets/github.webp";
import programing from "../assets/C_C++.webp";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 6,
      src: react,
      title: "ReactJS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: express,
      title: "Express.js",
      style: "shadow-yellow-400",
    },
    {
        id: 8,
        src: jquery,
        title: "jQuery",
        style: "shadow-blue-400",
      },
    {
        id: 9,
        src: mongo,
        title: "MongoDB",
        style: "shadow-green-400",
      },
      {
        id: 10,
        src: github,
        title: "Github",
        style: "shadow-gray-400",
      },
      {
        id: 11,
        src: programing,
        title: "C/C++",
        style: "shadow-blue-800",
      },
  ];

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
       <div className='pt-40 mt-10 mb-15'>
       <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-6'>These are the technologies I've worked with</p>
       </div> 
        <div className='w-full grid grid-cols-4  sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

        {
            techs.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img alt="" src={src} className='w-20 mx-auto'/>
                <p className='mt-4 text-xs'>{title}</p>
            </div>
            ))
        }

        </div>
      </div>
    </div>
  )
}

export default Experience