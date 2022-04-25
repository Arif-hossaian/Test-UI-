import React from 'react';
import CheckIcon from '../../icons/checkIcon';

const ChoosingUs = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 flex flex-col lg:flex-row lg:items-center lg:space-x-16 mt-6">
      <div>
        <img
          src="https://i.ibb.co/W2XH6dk/download-2.jpg"
          alt="img"
          className="w-96 h-96"
        />
      </div>
      <div>
        <h5 className="text-red-500 ">Why Choose us</h5>
        <h1 className="font-semibold text-4xl">
          Why You Choose our online Courses
        </h1>
        <p className="text-sm text-gray-400">
          lorem lorem kloregfd gfgfg gfgf fgfgf gfgf gfgf gfgf gfg
        </p>
        <div className="flex  items-center mt-4 space-x-2">
          <div className="bg-green-600 rounded-full">
            <CheckIcon />
          </div>
          <div>Increase Your learning skills</div>
        </div>
        <div className="flex  items-center mt-4 space-x-2">
          <div className="bg-green-600 rounded-full">
            <CheckIcon />
          </div>
          <div>High Quality Video and Audio classes</div>
        </div>
        <div className="flex  items-center mt-4 space-x-2">
          <div className="bg-green-600 rounded-full">
            <CheckIcon />
          </div>
          <div>Finish YOur course and get certificate</div>
        </div>

        <button className="p-4 bg-red-400 text-white mt-5">
          Explore courses
        </button>
      </div>
    </div>
  );
};

export default ChoosingUs;
