import { MicrophoneIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import ItIcon from '../../icons/itIcon';
import PencileIcon from '../../icons/pencileIcon';
import { Card } from '../Card/Card';
import VideoCameraIcon from '../../icons/videoCameraIcon';
import BriefCaseIcon from '../../icons/briefCaseIcon';
import CameraIcon from '../../icons/cameraIcon';
import MusicIcon from '../../icons/musicIcon';
import GridIcon from '../../icons/gridIcon';

const TopCategories = ({ className }) => {
  return (
    <div className="bg-[#f8faf9]">
      <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8">
        <h1 className="font-semibold text-center mt-5 text-2xl">
          Top Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <PencileIcon />
                </div>
                <div>Design dev</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <GridIcon />
                </div>
                <div>Design dev</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div className="text-red-300 text-lg">
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
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <div>Marketing</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <ItIcon />
                </div>
                <div>IT and Software</div>
              </div>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <VideoCameraIcon />
                </div>
                <div>VideoGraphy</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <BriefCaseIcon />
                </div>
                <div>Business</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <MusicIcon />
                </div>
                <div>Musical Instru</div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className={clsx('px-4 py-6 text-center md:text-left', className)}
            >
              <div className="flex justify-center items-center space-x-3">
                <div>
                  <ItIcon />
                </div>
                <div>Design dev</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
