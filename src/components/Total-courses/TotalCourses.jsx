import React from 'react';
import UserIcon from '../../icons/userIcon';
import CalendarIcon from '../../icons/calendarIcon';
import GridIcon from '../../icons/gridIcon';
import RatingIcon from '../../icons/ratingIcon';

const TotalCourses = () => {
  return (
    <div className="bg-[#f8faf9] mt-5">
      <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8">
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#255d52]  ">
              <UserIcon />
            </span>
            <h1 className="semi-bold text-4xl m-2 text-center">245k</h1>
            <span className="mx-auto mt-2 block h-0.5 w-[50px] rounded-full bg-red-600" />
            <h4 className="text-center text-gray-500 m-4">
              Worldwide students
            </h4>
          </div>
          <div>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#255d52]  ">
              <CalendarIcon />
            </span>
            <h1 className="semi-bold text-4xl m-2 text-center">23+</h1>
            <span className="mx-auto mt-2 block h-0.5 w-[50px] rounded-full bg-red-600" />
            <h4 className="text-center text-gray-500 m-4">Years experience</h4>
          </div>
          <div>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#255d52]  ">
              <GridIcon />
            </span>
            <h1 className="semi-bold text-4xl m-2 text-center">735+</h1>
            <span className="mx-auto mt-2 block h-0.5 w-[50px] rounded-full bg-red-600" />
            <h4 className="text-center text-gray-500 m-4">
              Professional Courses
            </h4>
          </div>
          <div>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#255d52]  ">
              <RatingIcon />
            </span>
            <h1 className="semi-bold text-4xl m-2 text-center">4.7k+</h1>
            <span className="mx-auto mt-2 block h-0.5 w-[50px] rounded-full bg-red-600" />
            <h4 className="text-center text-gray-500 m-4">Beautiful Review</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCourses;
