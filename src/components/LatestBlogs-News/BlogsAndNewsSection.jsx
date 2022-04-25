/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const demoData = [
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    mainTitle: 'Education Technology & Mobile Learning',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    body: 'loremgfgfg gfgdfg fgdfgdf gdfgdfgdfgdf',
  },
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    mainTitle: 'Education Technology & Mobile Learning',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    body: 'loremgfgfg gfgdfg fgdfgdf gdfgdfgdfgdf',
  },
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: 'https://i.ibb.co/3cv14k2/web-dev-camp.jpg',
    mainTitle: 'Education Technology & Mobile Learning',
    logo: 'https://i.ibb.co/yRr4tG0/image.png',
    wedDevLogo: 'https://i.ibb.co/3MNkYzF/image.png',
    body: 'loremgfgfg gfgdfg fgdfgdf gdfgdfgdfgdf',
  },
];
const BlogsAndNewsSection = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-6">
      <h1 className="text-center font-semibold text-4xl">
        Latest blog and News here
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {demoData.map((item, i) => (
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
              <p className="text-red-500 text-sm">{item.category}</p>
              <h2 className="mt-2 font-semibold text-md">{item.mainTitle}</h2>
              <p className="text-gray-500 text-sm mt-3">{item.body}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="grid place-items-center mt-12">
        <button className="p-3 bg-red-500 rounded-md text-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogsAndNewsSection;
