import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center mt-6 w-full max-w-sm mx-auto">
      <video
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        poster="/img/pizza.png"
        style={{ minHeight: '700px' }} // Ajusta este valor según sea necesario
      >
        <source src="/video1.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoPlayer;
