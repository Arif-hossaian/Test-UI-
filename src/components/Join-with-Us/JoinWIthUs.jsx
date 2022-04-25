import clsx from 'clsx';
import React from 'react';
import { Card } from '../Card/Card';

const JoinWIthUs = ({ className }) => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-5">
      <h5 className="text-center text-red-500">Join with Us</h5>
      <h1 className="text-4xl text-center font-semibold mt-3">
        Which One is Suitable for you?
      </h1>
      <div className="grid grid-cols-1 gap-4 place-content-center mt-6 md:grid-cols-2 md:gap-4">
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <div className="flex justify-between items-center space-x-2">
              <div>
                <h2 className="font-semibold text-lg">
                  Do You Want to <span className="text-red-400">Learn</span>{' '}
                  here?
                </h2>
                <p className="mt-3 text-gray-500 text-sm">
                  lorem lorem gfgfgf gfgfgfgfg
                </p>
                <div className="border border-red-400 rounded-lg w-28 mt-3 text-center">
                  <button className="p-2 text-red-400">Join us</button>
                </div>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/6JCfyyG/download-3.jpg"
                  alt="img"
                  className="object-cover h-48 w-96"
                />
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <div className="flex justify-between items-center space-x-2">
              <div>
                <h2 className="font-semibold text-lg">
                  Do You Want to <span className="text-red-400">Teach</span>{' '}
                  here?
                </h2>
                <p className="mt-3 text-gray-500 text-sm">
                  lorem lorem gfgfgf gfgfgfgfg
                </p>
                <div className="border border-red-400 rounded-lg w-28 mt-3 text-center">
                  <button className="p-2 text-red-400">Join us</button>
                </div>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/Wc56qYg/download-4.jpg"
                  alt="img"
                  className="object-cover h-48 w-96"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JoinWIthUs;
