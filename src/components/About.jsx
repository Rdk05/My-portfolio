import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-gray-300">
        Hello! I'm Radhika Kumari, a passionate MERN stack developer and pursuing Bachelor of Technology from Jaipur Engineering College. Proficient in MongoDB, Express.js, React, and Node.js, I specialize in crafting dynamic and user-friendly web applications. My academic journey includes hands-on experience with projects like Box-office-app, Tic-Tac-Toe game, E-commerce, PGLife, Dies Game, Country_Guide_App etc, demonstrating my ability to bring concepts to life.
        </p>

        <br />

        <p className="text-xl text-gray-300">
        Eager to contribute my skills to innovative projects, I am well-versed in both front-end and back-end technologies, using HTML, CSS, JavaScript, and React for captivating user interfaces. As I embark on my professional journey, I am excited about the endless possibilities in web development and eager to collaborate on impactful projects. Let's connect on "https://www.linkedin.com/in/radhika-kumari-863454204", or feel free to reach out via email at "radhikakumari0508@gmail.com". Together, let's build the future of the web
        </p>
      </div>
    </div>
  );
};

export default About;