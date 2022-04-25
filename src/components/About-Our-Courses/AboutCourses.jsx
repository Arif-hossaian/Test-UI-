import React from 'react';

const AboutCourses = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 flex flex-col lg:flex-row lg:items-center lg:space-x-16 mt-6">
      <div>
        <img
          src="https://i.ibb.co/h8ySMD9/download-1.jpg"
          alt="img"
          className="w-96 h-96"
        />
      </div>
      <div>
        <h5 className="text-red-500 ">About our courses</h5>
        <h1 className="font-semibold text-lg">
          Explore Thousand of creative classes
        </h1>
        <p>lorem lorem kloregfd gfgfg gfgf fgfgf gfgf gfgf gfgf gfg</p>
        <button className="p-4 bg-red-400 text-white mt-5">
          Explore courses
        </button>
      </div>
    </div>
  );
};

export default AboutCourses;
