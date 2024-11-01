import React from 'react'; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
        <div className="animate-spin rounded-full w-20 h-20 border-[4px] border-zinc-300 border-t-blue-400 "></div>
    </div>
  );
};

export default Loader;
