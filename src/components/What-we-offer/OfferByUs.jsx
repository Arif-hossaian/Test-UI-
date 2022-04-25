import React from 'react';
import PaperPlaneIcon from '../../icons/paperPlaneIcon';
import ItemsCard from './ItemsCard';

const OfferByUs = () => {
  return (
    <div className="bg-[#f8faf9]">
      <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8">
        <h5 className="text-center text-red-500 mt-11">What we offer</h5>
        <h1 className="text-center mt-3 text-4xl font-semibold">
          For Your Future Learning
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-6">
          <div>
            <ItemsCard
              Icon={<PaperPlaneIcon className="fill-white" />}
              title="Limon"
              subtitle="Senior UI/UX Designer and Law information analysis ..."
            />
          </div>
          <div>
            <ItemsCard
              Icon={<PaperPlaneIcon className="fill-white" />}
              title="Test"
              subtitle="Senior UI/UX Designer and Law information analysis ..."
            />
          </div>
          <div>
            <ItemsCard
              Icon={<PaperPlaneIcon className="fill-white" />}
              title="Limon"
              subtitle="Senior UI/UX Designer and Law information analysis ..."
            />
          </div>
          <div>
            <ItemsCard
              Icon={<PaperPlaneIcon className="fill-white" />}
              title="Test"
              subtitle="Senior UI/UX Designer and Law information analysis ..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferByUs;
