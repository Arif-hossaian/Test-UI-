/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import CoursesMenuItems from '../MenuItems/CoursesMenuItems';
import PagesItems from '../MenuItems/PagesItems';
import InstractorItems from '../MenuItems/InstructorItems';
import BlogItems from '../MenuItems/BlogItems';
import SearchBar from '../Searchbar/SearchBar';
import './nav.scss';
import Home from '../MenuItems/Home';
import CategoryItem from '../Explore-courses/CategoriesItem';
// import GithubIcon from '@/Icons/GithubIcon';

const navItems = [
  {
    title: <Home />,
  },
  {
    title: <PagesItems />,
  },
  {
    title: <InstractorItems />,
  },
  {
    title: <CoursesMenuItems />,
  },
  {
    title: <BlogItems />,
  },
  {
    title: <SearchBar />,
  },
];

export const Navbar = () => {
  const [isTop, setisTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const $head = document.getElementById('nc-chifis-header');
    if (!$head) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      !!isTop && setisTop(false);
    } else {
      setisTop(true);
    }
  }
  return (
    <div
      id="nc-chifis-header"
      className="nc-Header bg-[#255d52] lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
    >
      <div
        className={`nc-MainNav1 relative z-10 ${
          isTop ? 'onTop ' : 'notOnTop backdrop-filter'
        }`}
      >
        <div className="mx-auto max-w-screen-xl py-4 px-4 md:px-8">
          <div className="relative flex items-center">
            <Link to="/">
              <a className="flex-none">
                <CategoryItem />
              </a>
            </Link>

            <div className="relative ml-auto items-center md:flex">
              <nav className="hidden font-semibold leading-6 text-gray-900 dark:text-gray-200 md:block">
                <ul className="flex space-x-10">
                  {navItems.map((item) => (
                    <li className="relative" key={item.title}>
                      <a>{item.title}</a>

                      <span
                        className={clsx(
                          'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-indigo-500 transition-all duration-150 peer-hover:scale-x-100'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center space-x-4 pl-6 md:space-x-6">
                <div className="rounded-full backdrop-blur-sm border border-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="rounded-full backdrop-blur-2xl bg-opacity-70 border border-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <MenuPopOver display="flex md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPopOver = ({ display }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className={display}>
      <button aria-label="Navigation Menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 hover:stroke-indigo-600 dark:hover:stroke-indigo-400"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-2xl bg-red-200 p-6 shadow-lg dark:bg-gray-800 ">
            <a className="mx-auto mt-4">
              <span className="flex items-center space-x-2">
                {/* <CompactLogo className="h-[32px] w-[32px]" />
                <TextLogo className="h-[22px] w-auto fill-gray-900 dark:fill-gray-50" /> */}
                Test
              </span>
            </a>

            <ul className="mt-16 space-y-6">
              {navItems.map((item) => (
                <li className="relative" key={item.title}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      'peer block text-lg font-semibold transition-all duration-150 hover:text-indigo-500'
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <button
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 10 10" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
