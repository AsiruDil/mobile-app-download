import { useEffect, useRef, useState } from "react";

import bgVideo from "./src/assets/background.mp4";

export default function DownloadPage() {
  const videoRef=useRef(null);

  const downloadLink =import.meta.env.VITE_DRIVE_URL;

    
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
     
    >
         <video
         ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download APK
          </h1>

          <p className="text-gray-200 text-sm md:text-base mb-8">
            Download the latest version of our Android application and enjoy all
            features with the best experience.
          </p>

          <button
            onClick={() => window.open(downloadLink, "_blank")}
            className="w-full md:w-auto px-10 py-4 bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-white font-semibold text-lg rounded-xl shadow-lg"
          >
            📱 Download Now
          </button>

          <div className="mt-6 text-gray-300 text-sm">
            Compatible with Android 8.0+
          </div>
        </div>
      </div>
    </div>
  );
}