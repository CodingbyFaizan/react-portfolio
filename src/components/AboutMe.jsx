import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        We are looking for a great JavaScript developer who is proficient with React.js.
        Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). 
        You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. 
        Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.
        </p>

        <br />

        <p className="text-xl">
        ReactJS is one of the most popular JavaScript libraries among developers at the moment. 
        31.3% of developers in the world are proficient in this technology. 
        It is superb when it comes to developing user interfaces which will be used over and over again. 
        In simple words, the library is used for developing adaptive interfaces on websites and related apps. 
        As such, it is extremely important for high-end products. 
        Let’s see how the perfect React JS developer resume should look like, what skills and experience a developer must possess, and how to hire a React JS developer.
        </p>
      </div>
    </div>
  );
};

export default About;