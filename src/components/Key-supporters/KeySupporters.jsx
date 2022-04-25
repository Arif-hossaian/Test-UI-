import clsx from 'clsx';
import React from 'react';
import { Card } from '../Card/Card';

const KeySupporters = ({ className }) => {
  return (
    <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-6">
      <h1 className="text-center font-semibold text-4xl">Our Key Supporters</h1>
      <div className="grid grid-cols-5 gap-20 mt-10">
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <img
              src="https://i.ibb.co/9w0dskP/download-5.jpg"
              alt="img"
              className="object-contain h-38 w-76"
            />
          </Card>
        </div>
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <img
              src="https://i.ibb.co/H2HrsGP/download-6.jpg"
              alt="img"
              className="object-contain h-38 w-76"
            />
          </Card>
        </div>
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <img
              src="https://i.ibb.co/hWFRXGY/download-7.jpg"
              alt="img"
              className="object-contain h-38 w-76"
            />
          </Card>
        </div>
        <div>
          <Card
            className={clsx('px-4 py-6 text-center md:text-left', className)}
          >
            <img
              src="https://i.ibb.co/DbDZ5vt/download-8.jpg"
              alt="img"
              className="object-contain h-38 w-76"
            />
          </Card>
        </div>
        <div>
          <Card
            className={clsx('px-4 py-1 text-center md:text-left', className)}
          >
            <img
              src="https://i.ibb.co/bdT7gyx/download-10.jpg"
              alt="img"
              className="object-contain h-38 w-76"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KeySupporters;
