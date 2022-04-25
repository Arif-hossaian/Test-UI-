import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[#255d52] py-16">
      <div className="mx-auto  max-w-screen-lg">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <div>
            <h5 className="text-md font-semibold text-white">
              Learn New Skills and popular courses
            </h5>
            <h1 className="mt-3 text-4xl font-semibold text-white">
              For every student, <br></br> Every{' '}
              <span className="text-red-500">Classroom</span>{' '}
            </h1>
            <p className="text-gray-400 text-sm mt-5">
              gffdkjghdfkjg gdfkgjhdfkjgdhf gfdkjghdfkjgdf
              gdfkgjhdfkjghdfkjghdfkj
            </p>
            <button className="mt-5 rounded-md p-3 bg-red-500 text-white">
              Explore courses
            </button>
          </div>

          <img
            src="https://i.ibb.co/rpRCjTv/download-11.jpg"
            alt="Banner"
            priority
            width={420}
            height={420}
            quality={100}
            className="block overflow-hidden rounded-full bg-gray-200"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
