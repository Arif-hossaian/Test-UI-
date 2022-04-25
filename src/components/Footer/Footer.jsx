import React from 'react';
import EmailIcon from '../../icons/emailIcon';

const Footer = () => {
  return (
    <div className="bg-[#255d52] text-white">
      <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-6">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-4 md:gap-6">
          <div>
            <h2 className="font-semibold mb-5 text-lg">About</h2>
            <div className="text-gray-400 text-sm space-y-2">
              <p>About us</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Jobs</p>
              <p>In press</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-lg">Quick Links</h2>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Refund policy</p>
              <p>Documentation</p>
              <p>Chat online</p>
              <p>Order cancel</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-lg">Support</h2>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Contact Us</p>
              <p>Online chat</p>
              <p>Whats up</p>
              <p>Telegram</p>
              <p>Ticketing</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-lg">
              Subscribe for newsletter
            </h2>
            <div className="text-gray-400 text-sm space-y-2">
              <p>
                Be the first one to know the discount, offer and
                events.UnSubscribe whenever you like
              </p>
              <div className="bg-white w-64 rounded-full p-2 mt-2">
                <div className="flex justify-center items-center space-x-1">
                  <div>
                    <EmailIcon />
                  </div>
                  <input
                    placeholder="enter email"
                    className="outline-none w-24"
                  />
                  <button className="rounded-full bg-red-500 place-content-center text-white p-2">
                    Subscribe now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="mx-auto max-w-screen-lg text-right">copyright</p>
    </div>
  );
};

export default Footer;
