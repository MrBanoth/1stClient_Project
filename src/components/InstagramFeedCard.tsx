import React from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_PROFILE = "https://www.instagram.com/aryamadireddy";
const USERNAME = "@aryamadireddy";

const InstagramFeedCard = () => {
  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col w-full">
      <h3 className="text-xl font-bold mb-4">Latest Instagram Feed</h3>
      <div className="aspect-[9/16] w-full mb-4">
        <iframe
          src="https://www.instagram.com/aryamadireddy/embed"
          className="w-full h-full rounded-lg border-0"
          frameBorder="0"
          scrolling="no"
          allowTransparency
          title="Instagram Feed"
        ></iframe>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400">
          <Instagram size={18} className="text-white" />
        </span>
        <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-100 hover:text-amber-500 transition-colors duration-300">
          {USERNAME}
        </a>
      </div>
    </div>
  );
};

export default InstagramFeedCard; 