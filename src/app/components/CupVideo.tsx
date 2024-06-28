import React, { useRef, useEffect } from 'react';

interface PinterestVideoProps {
  videoId: string; // URL del video de Pinterest
}

const CupVideo: React.FC<PinterestVideoProps> = ({ videoId }) => {
 

  return (
    <div className="pinterest-video">
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
        allowFullScreen
        title="Cup official Video"
      ></iframe>
    </div>
  );
};

export default CupVideo;