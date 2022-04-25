/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CategoryItem from './CategoriesItem';
import HeartIcon from '../../icons/heartIcon';
import PlayIcon from '../../icons/playIcon';
import UserIcon from '../../icons/userIcon';
import RatingIcon from '../../icons/ratingIcon';

const topCourses = [
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    classes: '35 classes',
    classesLogo: <PlayIcon />,
    userLogo: <UserIcon />,
    totalUser: '291 Students',
    ratingIcon: <RatingIcon />,
    ratingPoint: '4.7',
    contentType1: 'Design',
    contentType2: 'Development',
    price: '20.20$',
  },
  {
    companyName: 'Dietrich, Beahan and Connelly',
    category: 'Tourism',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    classes: '35 classes',
    classesLogo: <PlayIcon />,
    userLogo: <UserIcon />,
    totalUser: '291 Students',
    ratingIcon: <RatingIcon />,
    ratingPoint: '4.7',
    contentType1: 'Design',
    contentType2: 'Development',
    price: '20.20$',
  },
  {
    companyName: 'Gutmann LLC',
    category: 'Oil & Gas',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    classes: '35 classes',
    classesLogo: <PlayIcon />,
    userLogo: <UserIcon />,
    totalUser: '291 Students',
    ratingIcon: <RatingIcon />,
    ratingPoint: '4.7',
    contentType1: 'Design',
    contentType2: 'Development',
    price: '20.20$',
  },
  {
    companyName: 'Kerluke Group',
    category: 'Accounting',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    classes: '35 classes',
    classesLogo: <PlayIcon />,
    userLogo: <UserIcon />,
    totalUser: '291 Students',
    ratingIcon: <RatingIcon />,
    ratingPoint: '4.7',
    contentType1: 'Design',
    contentType2: 'Development',
    price: '20.20$',
  },
  {
    companyName: 'Hahn LLC',
    category: 'Food & Beverage',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    classes: '35 classes',
    classesLogo: <PlayIcon />,
    userLogo: <UserIcon />,
    totalUser: '291 Students',
    ratingIcon: <RatingIcon />,
    ratingPoint: '4.7',
    contentType1: 'Design',
    contentType2: 'Development',
    price: '20.20$',
  },
];
const ExploreCourses = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Explore popular Courses</h1>
        <div>
          <div className="flex justify-between items-center space-x-3">
            <p>Sort by</p>
            <div>
              <CategoryItem />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {topCourses.map((item, i) => (
          <a
            className="mt-6 group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700"
            key={i}
          >
            <div className="relative block overflow-hidden">
              <img
                src={item.image}
                alt={item.companyName}
                className="transition-all duration-200 group-hover:scale-[102%] object-cover"
              />
            </div>

            <div className="relative flex flex-col border-t p-4">
              <span className="absolute right-4 -top-[165px] rounded-full block h-[40px] w-[40px] overflow-hidden  border shadow-sm">
                <div className="relative block overflow-hidden bg-slate-200 pt-[100%]">
                  <img
                    src={item.logo}
                    alt={item.companyName}
                    className="object-cover"
                  />
                </div>
              </span>

              <div className="flex justify-between items-center space-x-3">
                <div className="w-16 h-16">
                  <img
                    src={item.wedDevLogo}
                    alt="img"
                    className="rounded-full object-scale-down"
                  />
                </div>
                <h1 className="font-semibold">
                  The Complete web dev course 2022
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center text-sm space-x-1">
                  <div className="text-red-300">{item.classesLogo}</div>
                  <div>{item.classes}</div>
                </div>
                <div className="flex justify-between items-center text-sm space-x-1">
                  <div className="text-red-300">{item.userLogo}</div>
                  <div>{item.totalUser}</div>
                </div>
                <div className="flex justify-between items-center text-sm space-x-1">
                  <div className="text-red-300">{item.ratingIcon}</div>
                  <div>{item.ratingPoint}</div>
                </div>
              </div>
              <hr className="my-2"></hr>
              <div className="flex justify-between items-center text-sm space-x-1 mt-2">
                <div className="p-2 bg-red-300">{item.contentType1}</div>
                <div className="p-2 bg-red-300">{item.contentType2}</div>
                <div>{item.price}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="grid place-items-center mt-12">
        <button className="p-2 bg-red-300 text-white">All courses</button>
      </div>
    </div>
  );
};

export default ExploreCourses;
