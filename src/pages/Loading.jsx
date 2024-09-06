import React from 'react';
import enterimg from '../images/Enter.png';

const Loading = () => {
  return (
    <>
      <div
        className="loading flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${enterimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <a href='home' className="px-12 py-12 border-black border bg-transparent  mt-[355px] text-center rounded-full">
  
        </a>
      </div>
    </>
  );
};

export default Loading;
