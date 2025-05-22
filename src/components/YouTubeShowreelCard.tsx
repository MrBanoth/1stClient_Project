import React from 'react';
import { Youtube } from 'lucide-react';

const YOUTUBE_VIDEO_ID = "_gmp_eFDxQM";
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_VIDEO_ID}`;

const YouTubeShowreelCard = () => {
  return (
    <div className="max-w-2xl w-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col mx-auto">
      <div className="aspect-video w-full bg-gray-800">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
          title="Phani Madireddy Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600">
            <Youtube size={18} className="text-white" />
          </span>
          <span className="font-semibold text-gray-100">Showreel</span>
        </div>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-amber-500 hover:underline"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeShowreelCard; 